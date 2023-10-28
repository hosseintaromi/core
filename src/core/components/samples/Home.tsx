import { useRef } from "react";
import MenuInlineSample from "./MenuInlineSample";
import { EventType } from "../../hooks/useEvent";
import OverlaySlideContainer from "../containers/OverlaySlideContainer";
import SlideContainer from "../containers/SlideContainer";
import MenuInlineSample2 from "./MenuInlineSample2";
import MenuInlineSample3 from "./MenuInlineSample3";

function Home() {
  const elRef = useRef<HTMLElement | undefined>();

  return (
    <div style={{ overflowY: "scroll", height: "93vh" }}>
      <div style={{ display: "flex" }}>
        <button
          ref={elRef as any}
          style={{ width: "80px", height: "40px" }}
          id="openMenu"
        >
          add menu
        </button>
        <SlideContainer
          config={{
            event: EventType.Tap,
            components: [
              MenuInlineSample,
              MenuInlineSample2,
              MenuInlineSample3,
            ],
            elRef: elRef as any,
            className: "slide-menu",
          }}
        />
        {/* <OverlaySlideContainer
          config={{
            id: "setting1",
            event: EventType.Tap,
            component: MenuInlineSample,
            elRef: elRef as any,
            className: "slide-menu",
          }}
        /> */}
      </div>
    </div>
  );
}

export default Home;
