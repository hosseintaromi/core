import React, { useRef } from "react";
import { ViewAnimationConfig } from "../../@types/view";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import { activateTabConfig } from "../../utils/viewAnimations";
import { bezier } from "../../utils/bezier";
import { closeView } from "../../utils/viewManager";
import { ViewContainerType } from "../../@types/commonView";

const BottomSheetContainer = () => {
  const slideIn = bezier(0.25, 1, 0.5, 1);
  const backDropRefHook = useRef<any>(null);

  const { viewsInfo } = useViewManage(
    ViewContainerType.BottomSheet,
    3,
    {},
    {
      duration: 300,
      start(newView, prevView) {
        const newViewStyle = newView.ref.style;
        newViewStyle.display = "block";
        newViewStyle.opacity = "0";
        const length = viewsInfo.length;
        newViewStyle.zIndex = length + 1 + "";
        newViewStyle.transform = "translateY(100%)";

        if (prevView?.ref) {
          prevView.ref.style.zIndex = length - 1 + "";
        }
        backDropRefHook.current.style.zIndex = length + "";
      },
      animate(t, newView, prevView) {
        const p = slideIn(t);
        const newViewStyle = newView.ref.style;
        if (viewsInfo.length === 1) {
          backDropRefHook.current.style.opacity = `${p}`;
        }
        newViewStyle.opacity = `${p}`;
        newViewStyle.transform = `translateY(${100 - p * 100}%)`;
      },
      end(newView, prevView) {},
    } as ViewAnimationConfig,
    {
      duration: 300,
      start(closeViewEl, activeViewEl) {
        const closedViewStyle = closeViewEl.ref.style;
        const activeViewStyle = activeViewEl?.ref.style;
        if (activeViewStyle) {
          activeViewStyle.opacity = "0";
          activeViewStyle.zIndex = viewsInfo.length + 1 + "";
        }
        closedViewStyle.opacity = "1";
      },
      animate(t, closeViewEl, activeViewEl) {
        const closedViewStyle = closeViewEl.ref.style;
        const activeViewStyle = activeViewEl?.ref.style;
        const p = slideIn(t);

        closedViewStyle.opacity = `${1 - p}`;
        closedViewStyle.transform = `translateY(${p * 100}%)`;
        if (viewsInfo.length === 1) {
          backDropRefHook.current.style.opacity = `${1 - p}`;
        }

        if (activeViewStyle) {
          activeViewStyle.opacity = `${p}`;
        }
      },
      end(closeViewEl, activeViewEl) {
        const closedViewStyle = closeViewEl.ref.style;
        closedViewStyle.display = "none";
        backDropRefHook.current.style.zIndex = viewsInfo.length.toString();
      },
    } as ViewAnimationConfig,
    activateTabConfig,
    {
      duration: 300,
      animate(t, closedView, newView) {
        if (newView?.view.type === ViewContainerType.Modal) {
          const p = slideIn(t);
          backDropRefHook.current.style.opacity = p + "";
        }
      },
    },
    {
      duration: 300,
      animate(t, closedView, newView) {
        if (newView?.view.type === ViewContainerType.Modal) {
          const p = slideIn(t);
          backDropRefHook.current.style.opacity = 1 - p + "";
        }
      },
    },
  );

  const closeSheet = () => {
    if (viewsInfo.length === 0) {
      return;
    }
    const topViewInfo = viewsInfo[viewsInfo.length - 1];
    if (topViewInfo.view.options?.disableBackdrop) {
      topViewInfo.view.options.onClickedBackdrop?.();
      return;
    }
    closeView(topViewInfo.view);
  };

  return (
    <div className={viewsInfo.length === 0 ? "" : "bottom-sheet-container"}>
      <div
        ref={backDropRefHook}
        onClick={closeSheet}
        className={viewsInfo.length === 0 ? "" : "sheet-backdrop"}
      />
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

export default BottomSheetContainer;
