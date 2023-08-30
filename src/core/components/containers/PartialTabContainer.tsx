import React from "react";
import { PageComponent } from "./PageComponent";
import ViewContextProvider from "../../context/PageContextProvider";
import { useViewManage } from "../../hooks/usePageManage";
import {
  closeTabAnimationConfig,
  onLeaveContainerConfig,
  openTabContainerConfig,
} from "../../utils/pageAnimations";
import { PartialTabContainerType } from "../../@types/page";

const PartialTabContainer = ({
  containerName,
}: {
  containerName: PartialTabContainerType;
}) => {
  const { viewsInfo: pagesInfo } = useViewManage(
    containerName,
    0,
    {},
    openTabContainerConfig,
    closeTabAnimationConfig,
    openTabContainerConfig,
    openTabContainerConfig,
    onLeaveContainerConfig,
  );

  return pagesInfo.length === 0 ? (
    <></>
  ) : (
    <div className="partial-tab-container">
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

export default PartialTabContainer;
