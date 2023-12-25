import {
  useChatObserver,
  useChatObserverProp,
} from "../../hooks/useChatObserver";
import { Chat } from "../../stores/chat";
import { Message } from "../../stores/message";

function ChatItem({ chat, message }: { chat: Chat; message: Message }) {
  const name = useChatObserverProp(chat, "name");

  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default ChatItem;
