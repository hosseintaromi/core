import React from "react";
import { ViewContainerType } from "../../@types/page";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import {
  onEnterTabContainerConfig,
  closeTabAnimationConfig,
  onLeaveContainerConfig,
  activateTabConfig,
} from "../../utils/pageAnimations";

const MasterTabContainer = () => {
  const { viewsInfo: pagesInfo } = useViewManage(
    ViewContainerType.MasterTab,
    0,
    {
      moveBetweenViews: true,
    },
    activateTabConfig,
    closeTabAnimationConfig,
    activateTabConfig,
    onEnterTabContainerConfig,
    onLeaveContainerConfig,
  );

  return pagesInfo.length === 0 ? (
    <></>
  ) : (
    <div className="tab-wrapper">
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

export default MasterTabContainer;
