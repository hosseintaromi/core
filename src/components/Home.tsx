import { useRef, useState, useEffect } from "react";
import MenuInlineSample from "../core/components/samples/MenuInlineSample";
import { EventType } from "../core/hooks/useEvent";
import SlideContainer from "../core/components/containers/SlideContainer";
import MenuInlineSample2 from "../core/components/samples/MenuInlineSample2";
import MenuInlineSample3 from "../core/components/samples/MenuInlineSample3";
import useContextEvents from "../core/hooks/useContextEvents";
import { MyEvents } from "../@types/sample";
import { ViewContext } from "../core/context/ViewContextProvider";

function Home() {
  const elRef = useRef<HTMLElement | undefined>();
  const countRef = useRef<number>(0);
  const [count, setCount] = useState<number>();

  const { listen, call } = useContextEvents<MyEvents>(ViewContext);

  useEffect(() => {
    listen({
      onChange: (data) => {
        // const a = data.name;
      },
      onReady(data) {},
    });
    setInterval(() => {
      setCount((countRef.current += 1));
    }, 1000);
  }, []);

  return (
    <div style={{ overflowY: "scroll", height: "93vh" }}>
      <div style={{ display: "flex" }}>
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
        {/* <OverlaySlideContainer
          config={{
            id: "setting1",
            event: EventType.Tap,
            component: MenuInlineSample,
            elRef: elRef as any,
            className: "slide-menu",
          }}
        /> */}
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default Home;
