import { useCallback, useEffect, useRef, useState } from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { registerContainer, removeContainer } from "../../utils/viewManager";
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

const OverlayInlineContainer = ({ id }: { id: string }) => {
  const slideIn = bezier(0.25, 1, 0.5, 1);

  const [viewInfo, setViewInfo] = useState<ViewInfo>();
  const [hidden, setHidden] = useState<boolean>();

  const backDropRef = useRef<any>(null);
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

  const openView = useCallback(async (newView: ViewType<any>) => {
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

  const closeView = useCallback(
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

  const closeModal = () => {
    closeView(viewInfo?.view);
  };

  useEffect(() => {
    registerContainer(
      id,
      10,
      {},
      openView,
      closeView,
      async () => {},
      async () => {},
    );
    return () => {
      removeContainer(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    viewInfo && (
      <div className={hidden ? "hidden" : "overlay-container"}>
        <div ref={backDropRef} onClick={closeModal} className="backdrop" />
        <ViewContextProvider viewInfo={viewInfo}>
          <ViewComponent viewInfo={viewInfo} />
        </ViewContextProvider>
      </div>
    )
  );
};

export default OverlayInlineContainer;
