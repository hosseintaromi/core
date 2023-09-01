import {
  ChangeContainerEventType,
  ViewContainerConfig,
  ViewContainerDataType,
  ViewContainerType,
  ViewType,
} from "../@types/view";
import { listenBack, unlistenBack } from "./history";

const viewContainers: { [name: string]: ViewContainerDataType } = {};
const loadedViewsStack: ViewType<any>[] = [];

export function registerContainer(
  containerName: string,
  containerOrder: number,
  config: ViewContainerConfig,
  openView: (view: ViewType<any>) => Promise<any>,
  closeView: (view: ViewType<any>, res?: any) => Promise<any>,
  activateView: (view: ViewType<any>) => Promise<any>,
  changeContainer: (
    fromView: ViewType<any>,
    eventType: ChangeContainerEventType,
  ) => Promise<any>,
) {
  if (viewContainers[containerName]) {
    console.warn("ViewModule", "Duplicate container type");
    return;
  }

  viewContainers[containerName] = {
    views: [],
    containerOrder,
    config,
    openView: openView,
    closeView: closeView,
    activateView: activateView,
    changeContainer,
  };
}

export function removeContainer(containerName: string) {
  if (viewContainers[containerName]) {
    delete viewContainers[containerName];
  }
}

export async function openView<T = any>(
  view: Omit<ViewType<T>, "id"> & {
    id?: string;
  },
) {
  try {
    if (!view.id) {
      view.id = view.type + "-" + Date.now();
    }
    const container = viewContainers[view.type];
    if (!container) {
      return;
    }

    const foundView = container.views.find((x) => x.id === view.id);
    if (foundView && !container.config?.moveBetweenViews) {
      return;
    }

    const topView = getTopViewFromStack();
    const isSameType = topView?.type === view.type;
    if (isSameType && topView?.id === view.id) {
      return;
    }
    if (topView && !isSameType) {
      const topViewContainer = viewContainers[topView.type];
      topViewContainer.changeContainer(
        view as ViewType<T>,
        ChangeContainerEventType.onLeave,
      );
    }

    if (!container.config?.disableBrowserHistory) {
      listenBack({
        id: view.id,
        back: () => {
          closeView(view as ViewType<any>);
        },
      });
    }

    if (foundView) {
      await container.activateView(foundView);
      moveViewToTop(foundView);
    } else {
      container.views.push(view as ViewType<T>);
      await container.openView(view as ViewType<T>);
      view.onOpened?.();
      addToLoadedViewStack(view as ViewType<T>);
    }
  } catch (error) {}
}

export async function closeView<T>(view: ViewType<T>, res?: any) {
  try {
    const container = viewContainers[view.type];
    if (!container) {
      return;
    }

    const index = container.views.findIndex((x) => x.id === view.id);
    if (index < 0) {
      return;
    }
    if (isMasterView()) {
      return;
    }
    const topView = getTopViewFromStack(view.id);
    const topViewWithSameType = getTopViewFromStack(view.id, view.type as any);
    const isSameType = topView?.type === view.type;
    if (topView && !isSameType) {
      const topViewContainer = viewContainers[topView.type];
      topViewContainer.changeContainer(view, ChangeContainerEventType.onEnter);
    }
    if (!container.config?.disableBrowserHistory) {
      unlistenBack(view.id);
    }
    view.onClose?.(res);
    await container.closeView(view, topViewWithSameType);
    view.onClosed?.(res);
    container.views.splice(index, 1);
    removeFromLoadedViewStack(view);
  } catch {}
}

function addToLoadedViewStack(view: ViewType<any>) {
  loadedViewsStack.push(view);
}

function removeFromLoadedViewStack(view: ViewType<any>) {
  const stackIndex = loadedViewsStack.findIndex((x) => x.id === view.id);
  if (stackIndex > -1) {
    loadedViewsStack.splice(stackIndex, 1);
  }
}

function isMasterView() {
  return loadedViewsStack.length < 2;
}

function moveViewToTop(view: ViewType<any>) {
  const index = loadedViewsStack.findIndex((x) => x.id === view.id);
  if (index > -1) {
    let temp = loadedViewsStack[index];
    loadedViewsStack.splice(index, 1);
    loadedViewsStack.push(temp);
  }
}

function getTopViewFromStack(
  ignoreViewId?: string,
  type?: ViewContainerType,
): ViewType<any> | undefined {
  for (let i = loadedViewsStack.length - 1; i >= 0; i--) {
    const view = loadedViewsStack[i];
    if (
      view.id !== ignoreViewId &&
      (type === undefined || view.type === type)
    ) {
      return view;
    }
  }
}
