import React, { useRef } from "react";
import { ViewAnimationConfig, ViewContainerType } from "../../@types/page";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import { activateTabConfig } from "../../utils/pageAnimations";
import { bezier } from "../../utils/bezier";
import { closeView } from "../../utils/pageBuilder";

const BottomSheetContainer = () => {
  const slideIn = bezier(0.25, 1, 0.5, 1);
  const backDropRefHook = useRef<any>(null);

  const { viewsInfo: pagesInfo } = useViewManage(
    ViewContainerType.BottomSheet,
    3,
    {},
    {
      duration: 300,
      start(newPage, prevPage) {
        const newPageStyle = newPage.ref.style;
        newPageStyle.display = "block";
        newPageStyle.opacity = "0";
        const length = pagesInfo.length;
        newPageStyle.zIndex = length + 1 + "";
        newPageStyle.transform = "translateY(100%)";

        if (prevPage?.ref) {
          prevPage.ref.style.zIndex = length - 1 + "";
        }
        backDropRefHook.current.style.zIndex = length + "";
      },
      animate(t, newPage, prevPage) {
        const p = slideIn(t);
        const newPageStyle = newPage.ref.style;
        if (pagesInfo.length === 1) {
          backDropRefHook.current.style.opacity = `${p}`;
        }
        newPageStyle.opacity = `${p}`;
        newPageStyle.transform = `translateY(${100 - p * 100}%)`;
      },
      end(newPage, prevPage) {},
    } as ViewAnimationConfig,
    {
      duration: 300,
      start(closePageEl, activePageEl) {
        const closedPageStyle = closePageEl.ref.style;
        const activePageStyle = activePageEl?.ref.style;
        if (activePageStyle) {
          activePageStyle.opacity = "0";
          activePageStyle.zIndex = pagesInfo.length + 1 + "";
        }
        closedPageStyle.opacity = "1";
      },
      animate(t, closePageEl, activePageEl) {
        const closedPageStyle = closePageEl.ref.style;
        const activePageStyle = activePageEl?.ref.style;
        const p = slideIn(t);

        closedPageStyle.opacity = `${1 - p}`;
        closedPageStyle.transform = `translateY(${p * 100}%)`;
        if (pagesInfo.length === 1) {
          backDropRefHook.current.style.opacity = `${1 - p}`;
        }

        if (activePageStyle) {
          activePageStyle.opacity = `${p}`;
        }
      },
      end(closePageEl, activePageEl) {
        const closedPageStyle = closePageEl.ref.style;
        closedPageStyle.display = "none";
        backDropRefHook.current.style.zIndex = pagesInfo.length.toString();
      },
    } as ViewAnimationConfig,
    activateTabConfig,
    {
      duration: 300,
      animate(t, closedPage, newPage) {
        if (newPage?.view.type === ViewContainerType.Modal) {
          const p = slideIn(t);
          backDropRefHook.current.style.opacity = p + "";
        }
      },
    },
    {
      duration: 300,
      animate(t, closedPage, newPage) {
        if (newPage?.view.type === ViewContainerType.Modal) {
          const p = slideIn(t);
          backDropRefHook.current.style.opacity = 1 - p + "";
        }
      },
    },
  );

  const closeSheet = () => {
    if (pagesInfo.length === 0) {
      return;
    }
    const topPageInfo = pagesInfo[pagesInfo.length - 1];
    if (topPageInfo.view.options?.disableBackdrop) {
      topPageInfo.view.options.onClickedBackdrop?.();
      return;
    }
    closeView(topPageInfo.view);
  };

  return (
    <div className={pagesInfo.length === 0 ? "" : "bottom-sheet-container"}>
      <div
        ref={backDropRefHook}
        onClick={closeSheet}
        className={pagesInfo.length === 0 ? "" : "sheet-backdrop"}
      />
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

export default BottomSheetContainer;
