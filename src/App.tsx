import { useEffect, useState } from "react";
import TabContainer from "./core/components/containers/TabContainer";
import ModalContainer from "./core/components/containers/ModalContainer";
import MasterTabContainer from "./core/components/containers/MasterTabContainer";
import ToastContainer from "./core/components/containers/ToastContainer";
import BottomSheetContainer from "./core/components/containers/BottomSheetContainer";
import { closeView, openView } from "./core/utils/viewManager";
import { ViewContainerType } from "./core/@types/commonView";
import OverlayInlineContainer from "./core/components/containers/OverlayInlineContainer";
import { useView } from "./core/hooks/useView";

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
    <>
      <MasterTabContainer />
      <TabContainer />
      <ModalContainer />
      <BottomSheetContainer />
      <ToastContainer />
    </>
  );
}

function MenuSample() {
  const [selected, setSelected] = useState(-1);
  const { close } = useView();
  return (
    <div style={{ backgroundColor: "red" }}>
      <ul>
        <li
          onClick={() => setSelected(0)}
          style={{ color: selected == 0 ? "green" : "blue" }}
        >
          Option1
        </li>
        <li
          onClick={() => {
            close(1);
          }}
          style={{ color: selected == 1 ? "green" : "blue" }}
        >
          Option2
        </li>
        <li
          onClick={() => setSelected(2)}
          style={{ color: selected == 2 ? "green" : "blue" }}
        >
          Option3
        </li>
        <li
          onClick={() => setSelected(3)}
          style={{ color: selected == 3 ? "green" : "blue" }}
        >
          Option4
        </li>
      </ul>
    </div>
  );
}

function Home() {
  const view = {
    id: "menu1",
    type: "inlineOverlay_1",
    data: {},
    component: MenuSample,
  };
  const open = () => {
    openView(view);
  };
  const close = () => {
    closeView(view);
  };
  return (
    <div>
      <OverlayInlineContainer id="inlineOverlay_1" />
      <button onClick={() => open()}>add menu</button>
      <button onClick={() => close()}>close menu</button>
    </div>
  );
}

export default App;
