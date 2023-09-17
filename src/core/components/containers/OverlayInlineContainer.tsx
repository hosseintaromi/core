import {
  useCallback,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import {
  closeView,
  openView,
  registerContainer,
  removeContainer,
} from "../../utils/viewManager";
import {
  ViewAnimationConfig,
  ViewInfo,
  ViewRef,
  ViewType,
} from "../../@types/view";
import { bezier } from "../../utils/bezier";
import { useAnimate } from "../../hooks/useAnimate";
import { EventType, useEvent } from "../../hooks/useEvent";

export interface OverlayInlineData<T, U> {
  event: EventType;
  component: (props?: any) => JSX.Element;
  elRef: MutableRefObject<HTMLElement>;
  data?: T;
  className?: string;
  onClose?: (res?: U) => void;
  mapDataTo?: (data?: T) => any;
}

const OverlayInlineContainer = <T, U>({
  config,
}: {
  config: OverlayInlineData<T, U>;
}) => {
  const slideIn = bezier(0.25, 1, 0.5, 1);
  const viewInfoRef = useRef<ViewInfo>();
  const openedRef = useRef<boolean>();
  const containerIdRef = useRef<string>();
  const viewRef = useRef<HTMLElement>();
  const hoverTimerRef = useRef<NodeJS.Timeout>();
  const isHoverRef = useRef<boolean>();

  const [viewInfoState, setViewInfoState] = useState<ViewInfo>();
  const [hide, setHide] = useState<boolean>(true);
  const { requestAnimate } = useAnimate();

  useEvent(config.elRef, config.event, {
    onPress: () => showView(true),
    onTap: () => showView(hide),
    onDoubleClick: () => showView(true),
    onRightClick: () => showView(true),
    onMouseover: () => {
      isHoverRef.current = true;
      showByHover(true);
    },
    onMouseout: () => {
      isHoverRef.current = false;
      showByHover(false);
    },
  });

  const showByHover = useCallback((show: boolean) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = setTimeout(() => {
      if (isHoverRef.current === show && hide === show) {
        showView(show);
      }
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doAnimate = useCallback(
    (newView: ViewRef, config: ViewAnimationConfig) =>
      new Promise<any>((resolve, reject) => {
        config.start?.(newView);
        document.body.classList.add("animating");
        requestAnimate(
          config.duration || 0,
          (t: number) => {
            config.animate?.(t, newView);
          },
          () => {
            config.end?.(newView);
            document.body.classList.remove("animating");
            resolve(true);
          },
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const loadView = useCallback(
    (newView: ViewType<any>) =>
      new Promise<ViewInfo>((resolve, reject) => {
        const newViewInfo: ViewInfo = {
          id: newView.id,
          view: newView,
          onInit: async (el: HTMLElement) => {
            viewRef.current = el;
            if (config.event === EventType.Hover) {
              handleMouseEvents(el);
            }
            viewInfoRef.current = newViewInfo;
            resolve(newViewInfo);
          },
        };
        setViewInfoState(newViewInfo);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const openOverlayView = useCallback(async (newView: ViewType<any>) => {
    let viewInfo = viewInfoRef.current;
    if (!viewInfo) {
      viewInfo = await loadView(newView);
    }
    if (!viewInfo) {
      return;
    }
    await doAnimate(
      {
        view: viewInfo.view,
        ref: viewInfo.elRef as any,
      },
      {
        duration: 500,
        start(newView) {
          setHide(false);
          const newViewStyle = newView.ref.style;
          newViewStyle.scale = "0.7";
          newViewStyle.opacity = "0";
        },
        animate(t, newView) {
          const p = slideIn(t);
          const newViewStyle = newView.ref.style;
          newViewStyle.scale = p * 0.3 + 0.7 + "";
          newViewStyle.opacity = p + "";
        },
        end() {
          openedRef.current = true;
        },
      },
    );
    viewInfo.events?.onEnter?.({
      fromView: undefined,
      data: newView.data,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeOverlayView = useCallback(
    async (view?: ViewType<any>) => {
      const viewInfo = viewInfoRef.current;
      if (!viewInfo) {
        return;
      }
      viewInfo.events?.onClosing?.({
        toView: undefined,
      });

      await doAnimate(
        {
          view: viewInfo.view,
          ref: viewInfo.elRef as any,
        },
        {
          duration: 500,
          start(closeView) {
            const closeViewStyle = closeView.ref.style;
            closeViewStyle.scale = "1";
          },
          animate(t, closeView) {
            const p = slideIn(t);
            const closeViewStyle = closeView.ref.style;
            closeViewStyle.scale = 1 - p / 3 + "";
            closeViewStyle.opacity = 1 - p + "";
          },
          end() {
            openedRef.current = false;
            setHide(true);
          },
        },
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const showView = useCallback(
    (show: boolean) => {
      const viewInfoCurrent = viewInfoRef.current;
      if (show) {
        openView({
          id: "overlay-view",
          type: containerIdRef.current || "",
          component: config.component,
          data: config.data,
        });
      } else if (viewInfoCurrent?.view) {
        closeView(viewInfoCurrent.view);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleMouseEvents = (el: HTMLElement) => {
    //addEventListener()
  };

  useEffect(() => {
    const id = (containerIdRef.current = "overlay-inline-" + Date.now());
    registerContainer(id, 6, {}, openOverlayView, closeOverlayView);
    return () => {
      clearTimeout(hoverTimerRef.current);
      removeContainer(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewInfoState ? (
    <div className={hide ? "hidden" : "overlay-inline-container"}>
      <ViewContextProvider viewInfo={viewInfoState}>
        <ViewComponent viewInfo={viewInfoState} />
      </ViewContextProvider>
    </div>
  ) : (
    <></>
  );
};

export default OverlayInlineContainer;
