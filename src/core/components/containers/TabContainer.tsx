import React from "react";
import { ViewContainerType } from "../../@types/page";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import {
  closeTabAnimationConfig,
  openTabContainerConfig,
} from "../../utils/pageAnimations";

const TabContainer = () => {
  const { viewsInfo: pagesInfo } = useViewManage(
    ViewContainerType.Tab,
    2,
    {},
    openTabContainerConfig,
    closeTabAnimationConfig,
    openTabContainerConfig,
  );

  return pagesInfo.length === 0 ? (
    <></>
  ) : (
    <React.Fragment>
      <div className="tab-container">
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

export default TabContainer;
