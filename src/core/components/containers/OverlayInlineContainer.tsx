import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
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

export enum OverlayEventType {
  Click = "Click",
  RightClick = "RightClick",
  DoubleClick = "DoubleClick",
  Press = "Press",
  Hover = "Hover",
}

interface OverlayParamsType {
  target: HTMLElement;
  event: MouseEvent;
  position: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";
}

const OverlayInlineContainer = ({ config }: { config: any }) => {
  const slideIn = bezier(0.25, 1, 0.5, 1);

  const [viewInfo, setViewInfo] = useState<ViewInfo>();
  const [hidden, setHidden] = useState<boolean>(true);

  const containerIdRef = useRef<string>();
  const providerRef = useRef(null);
  const { requestAnimate } = useAnimate();

  const doAnimate = useCallback(
    (newView: ViewRef, config: ViewAnimationConfig) =>
      new Promise<any>((resolve, reject) => {
        config.start?.(newView);
        document.body.classList.add("animating");
        requestAnimate(
          500,
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
      new Promise((resolve, reject) => {
        const newViewInfo: ViewInfo = {
          id: newView.id,
          view: newView,
          onInit: async (el: HTMLElement) => {
            resolve(newViewInfo);
          },
        };
        setViewInfo(newViewInfo);
      }),
    [],
  );

  const openOverlayView = useCallback(async (newView: ViewType<any>) => {
    if (!viewInfo) {
      await loadView(newView);
    }
    if (!viewInfo) {
      return;
    }
    await doAnimate(
      {
        view: viewInfo.view,
        ref: viewInfo?.elRef as any,
      },
      {
        duration: 500,
        start: () => {
          setHidden(false);
        },
        animate: (t) => {},
        end: () => {},
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
          start: () => {},
          animate: (t) => {},
          end: () => {
            setHidden(true);
          },
        },
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const toggleView = (show: boolean) => {
    console.log(show);
    if (show) {
      openView({
        type: containerIdRef.current || "",
        component: config.component,
        data: {
          id: "menu11",
        },
      });
    } else if (viewInfo?.view) {
      closeView(viewInfo.view);
    }
  };

  const openMenuListener = () => {
    if (config.elRef) {
      switch (config.event as OverlayEventType) {
        case OverlayEventType.Click:
          {
            (config.elRef.current as HTMLElement).addEventListener(
              "click",
              (event) => {
                toggleView(true);
              },
            );
          }
          break;
      }
    }

    document.getElementById("body")?.addEventListener("click", (event) => {
      if (providerRef.current) {
        console.log(providerRef.current as HTMLElement);
        console.log(event.target as Node);
        if (
          event.target !== providerRef.current &&
          !(providerRef.current as HTMLElement).contains(event.target as Node)
        ) {
          toggleView(false);
        }
      }
    });
  };

  useEffect(() => {
    const id = (containerIdRef.current = "overlay-inline-" + Date.now());
    registerContainer(id, 6, {}, openOverlayView, closeOverlayView);
    openMenuListener();
    return () => {
      removeContainer(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewInfo ? (
    <div ref={providerRef} className={hidden ? "hidden" : "overlay-container"}>
      <ViewContextProvider viewInfo={viewInfo}>
        <ViewComponent viewInfo={viewInfo} />
      </ViewContextProvider>
    </div>
  ) : (
    <></>
  );
};

export default OverlayInlineContainer;
