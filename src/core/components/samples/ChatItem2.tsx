import { useObserver } from "../../hooks/useObserver";
import { Chat, chatObservable } from "../../stores/chat";

function ChatItem2({ chat }: { chat: Chat }) {
  useObserver(chatObservable, chat);

  return <h1>{chat.name}</h1>;
}

export default ChatItem2;
