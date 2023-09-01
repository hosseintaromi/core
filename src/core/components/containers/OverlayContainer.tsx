import React, { useEffect, useRef } from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import { closeView } from "../../utils/viewManager";
import { ViewAnimationConfig } from "../../@types/view";
import { bezier } from "../../utils/bezier";

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

const OverlayContainer = () => {
  const slideIn = bezier(0.25, 1, 0.5, 1);

  const backDropRef = useRef<any>(null);

  const getPosition = (params: OverlayParamsType) =>
    // if (
    //   window.innerWidth - viewInfo?.view.options?.params.posX <
    //   newView.ref.offsetWidth
    // ) {
    //   newViewStyle.left =
    //     viewInfo?.view.options?.params.posX - newView.ref.offsetWidth + "px";
    // } else {
    //   newViewStyle.left = viewInfo?.view.options?.params.posX + "px";
    // }

    // if (
    //   window.innerHeight - viewInfo?.view.options?.params.posY <
    //   newView.ref.offsetHeight
    // ) {
    //   newViewStyle.top =
    //     viewInfo?.view.options?.params.posY -
    //     newView.ref.offsetHeight +
    //     20 +
    //     "px";
    // } else {
    //   newViewStyle.top = viewInfo?.view.options?.params.posY + "px";
    // }

    ({
      left: params.event.clientX,

      top: params.event.clientY,
    });
  const { viewsInfo } = useViewManage(
    "Overlay",
    6,
    {},
    {
      duration: 500,
      start(newView) {
        const params: OverlayParamsType = newView.view.options?.params;
        if (params.target) {
          params.target.classList?.add("is-open");
        }
        const newViewStyle = newView.ref.style;
        newViewStyle.position = "absolute";
        const { left, top } = getPosition(params);
        newViewStyle.left = left + "px";
        newViewStyle.top = top + "px";
        newViewStyle.opacity = "0";
        backDropRef.current.style.opacity = "0";
      },
      animate(t, newView) {
        const options = newView?.view.options;
        const newViewStyle = newView.ref.style;
        const p = slideIn(t);
        newViewStyle.opacity = `${p}`;
        if (!options?.disableBackdrop) {
          backDropRef.current.style.opacity = p + "";
        }
      },
    } as ViewAnimationConfig,
    {
      duration: 0,
      start(closeView) {
        const { target }: OverlayParamsType = closeView.view.options?.params;
        if (target) {
          target.classList.remove("is-open");
        }
      },
    } as ViewAnimationConfig,
  );

  const closeModal = () => {
    if (viewsInfo.length > 0) {
      closeView(viewsInfo[0].view);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={viewsInfo.length === 0 ? "hidden" : "overlay-container"}>
      <div ref={backDropRef} onClick={closeModal} className="backdrop" />
      {viewsInfo?.map((viewInfo) => (
        <React.Fragment key={viewInfo.id}>
          <ViewContextProvider viewInfo={viewInfo}>
            <ViewComponent viewInfo={viewInfo} />
          </ViewContextProvider>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OverlayContainer;
