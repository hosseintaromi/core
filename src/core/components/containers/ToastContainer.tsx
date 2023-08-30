import React from "react";
import { ViewContainerType } from "../../@types/page";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import {
  onCloseToastConfig,
  onOpenToastConfig,
} from "../../utils/pageAnimations";

const ToastContainer = () => {
  const { viewsInfo: pagesInfo } = useViewManage(
    ViewContainerType.Toast,
    5,
    { disableBrowserHistory: true },
    onOpenToastConfig,
    onCloseToastConfig,
  );

  return pagesInfo.length === 0 ? (
    <></>
  ) : (
    <React.Fragment>
      <div className="toasts-container">
        {pagesInfo?.map((pageInfo) => (
          <React.Fragment key={pageInfo.id}>
            <ViewContextProvider viewInfo={pageInfo}>
              <PageComponent pageInfo={pageInfo} />
            </ViewContextProvider>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ToastContainer;
