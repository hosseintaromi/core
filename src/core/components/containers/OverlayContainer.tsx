import React, { useEffect, useRef } from "react";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import { closeView } from "../../utils/pageBuilder";
import { ViewAnimationConfig } from "../../@types/page";
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
    //   window.innerWidth - pageInfo?.page.options?.params.posX <
    //   newPage.ref.offsetWidth
    // ) {
    //   newPageStyle.left =
    //     pageInfo?.page.options?.params.posX - newPage.ref.offsetWidth + "px";
    // } else {
    //   newPageStyle.left = pageInfo?.page.options?.params.posX + "px";
    // }

    // if (
    //   window.innerHeight - pageInfo?.page.options?.params.posY <
    //   newPage.ref.offsetHeight
    // ) {
    //   newPageStyle.top =
    //     pageInfo?.page.options?.params.posY -
    //     newPage.ref.offsetHeight +
    //     20 +
    //     "px";
    // } else {
    //   newPageStyle.top = pageInfo?.page.options?.params.posY + "px";
    // }

    ({
      left: params.event.clientX,

      top: params.event.clientY,
    });
  const { viewsInfo: pagesInfo } = useViewManage(
    "Overlay",
    6,
    {},
    {
      duration: 500,
      start(newPage) {
        const params: OverlayParamsType = newPage.view.options?.params;
        if (params.target) {
          params.target.classList?.add("is-open");
        }
        const newPageStyle = newPage.ref.style;
        newPageStyle.position = "absolute";
        const { left, top } = getPosition(params);
        newPageStyle.left = left + "px";
        newPageStyle.top = top + "px";
        newPageStyle.opacity = "0";
        backDropRef.current.style.opacity = "0";
      },
      animate(t, newPage) {
        const options = newPage?.view.options;
        const newPageStyle = newPage.ref.style;
        const p = slideIn(t);
        newPageStyle.opacity = `${p}`;
        if (!options?.disableBackdrop) {
          backDropRef.current.style.opacity = p + "";
        }
      },
    } as ViewAnimationConfig,
    {
      duration: 0,
      start(closePage) {
        const { target }: OverlayParamsType = closePage.view.options?.params;
        if (target) {
          target.classList.remove("is-open");
        }
      },
    } as ViewAnimationConfig,
  );

  const closeModal = () => {
    if (pagesInfo.length > 0) {
      closeView(pagesInfo[0].view);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={pagesInfo.length === 0 ? "hidden" : "overlay-container"}>
      <div ref={backDropRef} onClick={closeModal} className="backdrop" />
      {pagesInfo?.map((pageInfo) => (
        <React.Fragment key={pageInfo.id}>
          <ViewContextProvider viewInfo={pageInfo}>
            <PageComponent pageInfo={pageInfo} />
          </ViewContextProvider>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OverlayContainer;
