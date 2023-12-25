import { useRef } from "react";
import MenuInlineSample from "../core/components/samples/MenuInlineSample";
import { EventType } from "../core/hooks/useEvent";
import MenuInlineSample2 from "../core/components/samples/MenuInlineSample2";
import OverlayInlineContainer, {
  OverlayInlineData,
} from "../core/components/containers/OverlayInlineContainer";
import ChatItem3 from "../core/components/samples/ChatItem3";
import { useLocale } from "../core/hooks/useLocale";
import { setLang } from "../core/stores/locale";
import { LocaleKeyChat, LocaleKeyUser } from "../core/@types/locale";
import useInit from "../core/hooks/useInit";
import { useOverlay } from "../core/hooks/useOverlay";

function Home() {
  const elRef = useRef<HTMLElement | undefined>();
  const lang = useLocale<LocaleKeyUser | LocaleKeyChat>();

  const config = useOverlay<any, any>({
    component: MenuInlineSample,
    event: EventType.Tap,
  });

  const config2 = useOverlay<any, any>({
    component: MenuInlineSample2,
    event: EventType.Tap,
  });

  useInit(() => {
    setTimeout(() => {
      //setLang("fa");
    }, 4000);
  });

  return (
    <div>
      <table>
        <tr>
          <td>
            <button ref={config}>test1</button>
          </td>
        </tr>
        <tr>
          <td>
            <button ref={config2}>test2</button>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{ display: "flex" }}>
              <ChatItem3 name={lang("add_chat")} />
              <br />
              <br />
              <ChatItem3 name={lang("add_chat")} />
              <br />
              <ChatItem3 name={lang("add_chat")} />
              <br />
              <ChatItem3 name={lang("add_user")} />
              <br />
              <ChatItem3 name={lang("add_chat")} />
              <br />
              <ChatItem3 name={lang("delete_chat")} />
              <br />
              <ChatItem3 name={lang("add_chat")} />
              <br />
              <ChatItem3 name={lang("delete_chat")} />
              <br />
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
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Home;
