import React, { useEffect, useRef } from "react";
import { ViewAnimationConfig, ViewContainerType } from "../../@types/page";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import { bezier } from "../../utils/bezier";
import { closeView } from "../../utils/pageBuilder";

const ModalContainer = () => {
  const slideIn = bezier(0.25, 1, 0.5, 1);
  const backDropRef = useRef<any>(null);

  const { viewsInfo: pagesInfo } = useViewManage(
    ViewContainerType.Modal,
    4,
    {},
    {
      duration: 300,
      start(newPage, prevPage) {
        const newPageStyle = newPage.ref.style;
        newPageStyle.display = "block";
        newPageStyle.opacity = "0";
        newPageStyle.marginTop = -newPage.ref.offsetHeight / 2 + "px";
        const length = pagesInfo.length;
        newPageStyle.zIndex = length + 1 + "";
        newPageStyle.transform = "translateY(20%)";

        if (prevPage?.ref) {
          prevPage.ref.style.zIndex = length - 1 + "";
        }
        backDropRef.current.style.zIndex = length + "";
      },
      animate(t, newPage, prevPage) {
        const p = slideIn(t);
        const newPageStyle = newPage.ref.style;
        if (pagesInfo.length === 1) {
          backDropRef.current.style.opacity = `${p}`;
        }
        newPageStyle.opacity = `${p}`;
        newPageStyle.transform = `translateY(${20 - p * 20}%)`;
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
        closedPageStyle.transform = `translateY(${p * 20}%)`;
        if (pagesInfo.length === 1) {
          backDropRef.current.style.opacity = `${1 - p}`;
        }

        if (activePageStyle) {
          activePageStyle.opacity = `${p}`;
        }
      },
      end(closePageEl, activePageEl) {
        const closedPageStyle = closePageEl.ref.style;
        closedPageStyle.display = "none";
        backDropRef.current.style.zIndex = pagesInfo.length.toString();
      },
    } as ViewAnimationConfig,
  );

  useEffect(() => {}, []);

  const closeModal = () => {
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
    <div className={pagesInfo.length === 0 ? "hidden" : "modal-container"}>
      <div
        ref={backDropRef}
        onClick={closeModal}
        className={pagesInfo.length === 0 ? "" : "modal-backdrop"}
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

export default ModalContainer;
