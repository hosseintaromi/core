import { useView } from "../../hooks/useView";
import store, { Chat } from "../../stores/chat";
import ChatItem from "./ChatItem";
import MenuInlineSample2 from "./MenuInlineSample2";
import { useEffect, useState } from "react";

function MenuInlineSample() {
  const { close, openView } = useView();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const chats = store.getChats();
    setChats(chats);
    setTimeout(() => {
      store.updateTest();
    }, 3000);
  }, []);

  return (
    <div>
      {chats?.map((chat, index) => (
        <ChatItem key={index} chat={chat} />
      ))}
      <ul>
        <li
          onClick={() => {
            openView({
              id: "idSample2",
              component: MenuInlineSample2,
              className: "slide-menu",
            });
          }}
        >
          Ambient mode
        </li>
        <li>Subtitles</li>
        <li>closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li>Subtitles/closed</li>
        <li onClick={() => close()} style={{ color: "red" }}>
          Close
        </li>
      </ul>
    </div>
  );
}

export default MenuInlineSample;
