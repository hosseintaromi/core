import { ViewContainerType } from "../@types/commonView";
import {
  ChangeContainerEventType,
  CloseType,
  ViewContainerConfig,
  ViewContainerDataType,
  ViewType,
} from "../@types/view";
import { listenBack, unlistenBack } from "./historyManager";

const viewContainers: { [name: string]: ViewContainerDataType } = {};
const loadedViewsStack: ViewType<any>[] = [];

export function registerContainer(
  containerName: string,
  containerOrder: number,
  config: ViewContainerConfig,
  openView: (view: ViewType<any>) => Promise<any>,
  closeView: (view: ViewType<any>, res?: any) => Promise<any>,
  activateView?: (view: ViewType<any>) => Promise<any>,
  changeContainer?: (
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
      topViewContainer.changeContainer?.(
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
      await container.activateView?.(foundView);
      moveViewToTop(foundView);
    } else {
      container.views.push(view as ViewType<T>);
      await container.openView(view as ViewType<T>);
      view.onOpened?.();
      addToLoadedViewStack(view as ViewType<T>);
    }
  } catch (error) {}
}

export async function closeView<T>(info: CloseType) {
  try {
    if (!info.type || !info.id) {
      return;
    }
    const container = viewContainers[info.type];
    if (!container) {
      return;
    }

    const index = container.views.findIndex((x) => x.id === info.id);
    if (index < 0) {
      return;
    }
    if (isMasterView()) {
      return;
    }
    const closingView = container.views[index];
    const topView = getTopViewFromStack(closingView.id);
    const topViewWithSameType = getTopViewFromStack(
      closingView.id,
      closingView.type as any,
    );
    const isSameType = topView?.type === closingView.type;
    if (topView && !isSameType) {
      const topViewContainer = viewContainers[topView.type];
      topViewContainer.changeContainer?.(
        closingView,
        ChangeContainerEventType.onEnter,
      );
    }
    if (!container.config?.disableBrowserHistory) {
      unlistenBack(info.id);
    }
    closingView.onClose?.(info.res);
    await container.closeView(closingView, topViewWithSameType, {
      res: info.res,
      closeAll: info.all,
    });
    closingView.onClosed?.(info.res);
    container.views.splice(index, 1);
    removeFromLoadedViewStack(closingView);
  } catch {}
}

function addToLoadedViewStack(view: ViewType<any>) {
  loadedViewsStack.push(view);
}

function removeFromLoadedViewStack(view: ViewType<any>) {
  loadedViewsStack.remove((x) => x.id === view.id);
}

function isMasterView() {
  return loadedViewsStack.length < 2;
}

function moveViewToTop(view: ViewType<any>) {
  const removed = loadedViewsStack.remove((x) => x.id === view.id);
  if (removed) {
    loadedViewsStack.push(removed);
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
