import TabContainer from "./components/containers/TabContainer";
import ModalContainer from "./components/containers/ModalContainer";
import MasterTabContainer from "./components/containers/MasterTabContainer";
import ToastContainer from "./components/containers/ToastContainer";
import BottomSheetContainer from "./components/containers/BottomSheetContainer";
import { openView } from "./utils/viewManager";
import { ViewContainerType } from "./@types/commonView";
import {} from "./utils/extensions";
import OverlayContainer from "./components/containers/OverlayContainer";
import Home from "./components/Home";
import { useTimeout } from "./hooks/useTimeout";
import useInit from "./hooks/useInit";

function App() {
  const timeout = useTimeout();

  useInit(() => {
    timeout(() => {
      console.log("timeout2");
    }, 2000);
    timeout(
      () => {
        console.log("timeout2");
      },
      4000,
      true,
    );
    openView({
      type: ViewContainerType.MasterTab,
      component: Home,
    });
  });

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
