import { useEffect } from "react";
import TabContainer from "./core/components/containers/TabContainer";
import ModalContainer from "./core/components/containers/ModalContainer";
import MasterTabContainer from "./core/components/containers/MasterTabContainer";
import ToastContainer from "./core/components/containers/ToastContainer";
import BottomSheetContainer from "./core/components/containers/BottomSheetContainer";
import { openView } from "./core/utils/viewManager";
import { ViewContainerType } from "./core/@types/commonView";
import Home from "./core/components/sample/Home";
import OverlayContainer from "./core/components/containers/OverlayContainer";
import {} from "./core/utils/event";

function App() {
  useEffect(() => {
    openView({
      id: "Home",
      type: ViewContainerType.MasterTab,
      data: {},
      component: Home,
    });
  }, []);

  return (
    <div id="body">
      <MasterTabContainer />
      <TabContainer />
      <ModalContainer />
      <BottomSheetContainer />
      <ToastContainer />
      <OverlayContainer />
    </div>
  );
}

export default App;
