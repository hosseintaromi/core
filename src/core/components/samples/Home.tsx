import { useEffect, useRef } from "react";
import OverlayInlineContainer from "../containers/OverlayInlineContainer";
import MenuInlineSample from "./MenuInlineSample";
import { EventType, useEvent } from "../../hooks/useEvent";

function Home() {
  const elRef1 = useRef<HTMLInputElement>(null);
  const elRef2 = useRef<HTMLInputElement>(null);
  const elRef = useRef<HTMLInputElement>(null);
  useEvent(elRef2 as any, EventType.HorizontalSwipe, {
    onTouchMove: () => {
      console.log("Move horizontal");
    },
  });
  useEvent(elRef1 as any, EventType.Tap, {
    onTap: () => {
      console.log("Tap");
    },
  });
  useEffect(() => {}, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button
          ref={elRef as any}
          style={{ width: "80px", height: "40px" }}
          id="openMenu"
        >
          add menu
        </button>
        <OverlayInlineContainer
          config={{
            event: EventType.Tap,
            component: MenuInlineSample,
            elRef: elRef ? elRef : ((<></>) as any),
          }}
        />
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
    </div>
  );
}

export default Home;
