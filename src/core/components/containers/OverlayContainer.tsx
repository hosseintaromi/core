import React, { useEffect, useRef } from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import { closeView } from "../../utils/viewManager";
import { ViewAnimationConfig, ViewRef } from "../../@types/view";
import { bezier } from "../../utils/bezier";

interface OverlayParamsType {
  target: HTMLElement;
  event: MouseEvent;
  position: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";
}

const OverlayContainer = () => {
  const slideIn = bezier(0.25, 1, 0.5, 1);

  const backDropRef = useRef<any>(null);
  const getPosition = (params: OverlayParamsType, newPage: ViewRef) => {
    const offsetHeight = newPage.ref.offsetHeight;
    const offsetWidth = newPage.ref.offsetWidth;
    const clientX = params.event.clientX;
    const clientY = params.event.clientY;
    let left;
    let top;

    if (params.position === "BottomLeft" || params.position === "BottomRight") {
      if (window.innerHeight - clientY < offsetHeight) {
        top = clientY - offsetHeight + 20;
      } else {
        top = clientY;
      }
    }
    if (params.position === "TopLeft" || params.position === "TopRight") {
      if (clientY < offsetHeight) {
        top = clientY;
      } else {
        top = clientY - offsetHeight + 20;
      }
    }
    if (params.position === "TopLeft" || params.position === "BottomLeft") {
      if (clientX < offsetWidth) {
        left = clientX;
      } else {
        left = clientX - offsetWidth;
      }
    }
    if (params.position === "TopRight" || params.position === "BottomRight") {
      if (window.innerWidth - clientX < offsetWidth) {
        left = clientX - offsetWidth;
      } else {
        left = clientX;
      }
    }
    return {
      left: left,
      top: top,
    };
  };

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
        const { left, top } = getPosition(params, newView);
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
