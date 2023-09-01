import React from "react";
import { ViewContainerType } from "../../@types/view";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import {
  closeTabAnimationConfig,
  openTabContainerConfig,
} from "../../utils/viewAnimations";

const TabContainer = () => {
  const { viewsInfo } = useViewManage(
    ViewContainerType.Tab,
    2,
    {},
    openTabContainerConfig,
    closeTabAnimationConfig,
    openTabContainerConfig,
  );

  return viewsInfo.length === 0 ? (
    <></>
  ) : (
    <React.Fragment>
      <div className="tab-container">
        {viewsInfo?.map((viewInfo) => (
          <React.Fragment key={viewInfo.id}>
            <ViewContextProvider viewInfo={viewInfo}>
              <ViewComponent viewInfo={viewInfo} />
            </ViewContextProvider>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TabContainer;
