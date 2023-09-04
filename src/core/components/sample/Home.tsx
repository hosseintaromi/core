import { useEffect, useRef } from "react";
import OverlayInlineContainer, {
  OverlayEventType,
} from "../containers/OverlayInlineContainer";
import MenuSample from "./MenuSample";

function Home() {
  const elRef = useRef(null);

  useEffect(() => {});

  return (
    <div>
      <OverlayInlineContainer
        config={{
          elRef: elRef,
          event: OverlayEventType.Click,
          component: MenuSample,
        }}
      />
      <button ref={elRef} id="openMenu">
        add menu
      </button>
    </div>
  );
}

export default Home;
