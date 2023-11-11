import { useEffect } from "react";
import TabContainer from "./core/components/containers/TabContainer";
import ModalContainer from "./core/components/containers/ModalContainer";
import MasterTabContainer from "./core/components/containers/MasterTabContainer";
import ToastContainer from "./core/components/containers/ToastContainer";
import BottomSheetContainer from "./core/components/containers/BottomSheetContainer";
import { openView } from "./core/utils/viewManager";
import { ViewContainerType } from "./core/@types/commonView";
import {} from "./core/utils/extensions";
import OverlayContainer from "./core/components/containers/OverlayContainer";
import fakeData from "./fakeData2.json";
import FormPage from "./components/FormPage";

function App() {
  useEffect(() => {
    openView({
      id: fakeData.controls[0].control_id,
      type: ViewContainerType.MasterTab,
      data: {
        form: fakeData,
        indexes: [0],
      },
      component: FormPage,
    });
  }, []);

  return (
    <>
      <MasterTabContainer />
      <TabContainer />
      <ModalContainer />
      <BottomSheetContainer />
      <ToastContainer />
      <OverlayContainer />
    </>
  );
}

export default App;
