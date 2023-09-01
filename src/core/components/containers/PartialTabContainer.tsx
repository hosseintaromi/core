import React from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import {
  closeTabAnimationConfig,
  onLeaveContainerConfig,
  openTabContainerConfig,
} from "../../utils/viewAnimations";
import { PartialTabContainerType } from "../../@types/view";

const PartialTabContainer = ({
  containerName,
}: {
  containerName: PartialTabContainerType;
}) => {
  const { viewsInfo } = useViewManage(
    containerName,
    0,
    {},
    openTabContainerConfig,
    closeTabAnimationConfig,
    openTabContainerConfig,
    openTabContainerConfig,
    onLeaveContainerConfig,
  );

  return viewsInfo.length === 0 ? (
    <></>
  ) : (
    <div className="partial-tab-container">
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

export default PartialTabContainer;
