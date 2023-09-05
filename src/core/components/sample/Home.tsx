import { useEffect, useRef } from "react";
import OverlayInlineContainer from "../containers/OverlayInlineContainer";
import MenuInlineSample from "./MenuInlineSample";
import { useOverlayMenu } from "../../hooks/useOverlayMenu";
import { Option } from "../common-views/Menu";
import { OverlayEventType } from "../containers/OverlayContainer";
import { EventType } from "../../hooks/useEvent";

function Home() {
  const elRef = useRef(null);
  const closeMenu = (res?: Option) => {
    console.log(res);
  };

  const elRefMenu = useOverlayMenu({
    event: OverlayEventType.Click,
    data: {
      options: [
        {
          label: "option1",
          value: "1",
        },
        {
          label: "option2",
          value: "2",
        },
        {
          label: "option3",
          value: "3",
        },
      ],
    },
    onClose: closeMenu,
  });

  useEffect(() => {});

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button
          style={{ width: "80px", height: "40px" }}
          ref={elRef}
          id="openMenu"
        >
          add menu
        </button>
        <OverlayInlineContainer
          config={{
            event: EventType.Click,
            component: MenuInlineSample,
            elRef: elRef ? elRef : ((<></>) as any),
          }}
        />
      </div>

      <div ref={elRefMenu}>
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
    </div>
  );
}

export default Home;
