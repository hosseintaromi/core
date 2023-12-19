import { useRef } from "react";
import MenuInlineSample from "../core/components/samples/MenuInlineSample";
import { EventType } from "../core/hooks/useEvent";
import MenuInlineSample2 from "../core/components/samples/MenuInlineSample2";
import OverlayInlineContainer from "../core/components/containers/OverlayInlineContainer";

function Home() {
  const elRef = useRef<HTMLElement | undefined>();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <MenuInlineSample />
        {/* <SlideContainer
          config={{
            event: EventType.Tap,
            components: [
              { title: "All", component: MenuInlineSample },
              { title: "Groups", component: MenuInlineSample2 },
              { title: "Private Chats", component: MenuInlineSample3 },
            ],
            elRef: elRef as any,
            className: "slide-menu",
          }}
        /> */}
        {/* <OverlayInlineContainer
          config={{
            event: EventType.Tap,
            component: MenuInlineSample,
            elRef: elRef as any,
            className: "slide-menu",
          }}
        /> */}
      </div>
      <div style={{ display: "flex" }}>
        <OverlayInlineContainer
          config={{
            event: EventType.Tap,
            component: MenuInlineSample2,
            elRef: elRef as any,
            className: "slide-menu",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
