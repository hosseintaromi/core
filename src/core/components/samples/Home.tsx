import { useEffect, useRef } from "react";
import OverlayInlineContainer, {
  OverlayInlineData,
} from "../containers/OverlayInlineContainer";
import MenuInlineSample from "./MenuInlineSample";
import { EventType, useEvent } from "../../hooks/useEvent";
import { useOverlayMenu } from "../../hooks/useOverlayMenu";

function Home() {
  const menuConfigRef = useRef<OverlayInlineData<any, any>>({
    event: EventType.None,
    component: MenuInlineSample,
  });

  const elRef1 = useRef<HTMLInputElement>(null);
  const elRef2 = useRef<HTMLInputElement>(null);
  const elRef3 = useRef<HTMLInputElement>(null);
  const elRef = useRef<HTMLInputElement>(null);
  useEvent(elRef2 as any, EventType.HorizontalSwipe, {
    onTouchMove: () => {
      console.log("Move horizontal");
    },
    onTouchStart: () => {
      console.log("Start move horizontal");
    },
    onTouchEnd: () => {
      console.log("End move horizontal");
    },
  });
  useEvent(elRef2 as any, EventType.VerticalSwipe, {
    onTouchMove: () => {
      console.log("Move Vertical");
    },
    onTouchStart: () => {
      console.log("Start move Vertical");
    },
    onTouchEnd: () => {
      console.log("End move Vertical");
    },
  });
  useEvent(elRef1 as any, EventType.Tap, {
    onTap: () => {
      console.log("Tap");
    },
  });
  useEvent(elRef3 as any, EventType.RightClick, {
    onRightClick: () => {
      console.log("Right click");
    },
  });
  const elRef4 = useOverlayMenu({
    event: EventType.Hover,
    data: {
      options: [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
      ],
    },
  });
  useEffect(() => {
    setTimeout(() => {
      menuConfigRef.current.show?.(true);
    }, 3000);
    setTimeout(() => {
      menuConfigRef.current.show?.(false);
    }, 6000);
  }, []);

  return (
    <div style={{ overflowY: "scroll", height: "93vh" }}>
      <div style={{ display: "flex" }}>
        <button ref={elRef4}>Context menu</button>
        <button
          ref={elRef as any}
          style={{ width: "80px", height: "40px" }}
          id="openMenu"
        >
          add menu
        </button>
        {/* <OverlayInlineContainer
          config={{
            event: EventType.Hover,
            component: MenuInlineSample,
            elRef: elRef ? elRef : ((<></>) as any),
          }}
        /> */}
        <OverlayInlineContainer config={menuConfigRef.current} />
      </div>

      <div ref={elRef1}>
        <div
          style={{
            backgroundColor: "green",
            marginTop: "20px",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
        </div>
      </div>

      <div ref={elRef2}>
        <div
          style={{
            backgroundColor: "maroon",
            marginTop: "20px",
            borderRadius: "8px",
            padding: "10px",
            color: "white",
          }}
        >
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
        </div>
      </div>

      <div ref={elRef3}>
        <div
          style={{
            padding: "50px",
            backgroundColor: "blueviolet",
            marginTop: "20px",
            borderRadius: "8px",
            color: "white",
          }}
        >
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
          <p style={{ color: "yellow", marginTop: "20px" }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            used as a placeholder before final copy is available
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
