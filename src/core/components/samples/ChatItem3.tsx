import { useObserver } from "../../hooks/useObserver";
import { Chat, chatObservable } from "../../stores/chat";

function ChatItem3({ chat }: { chat: Chat }) {
  const _chat = useObserver(chatObservable, chat);

  return <h1>{_chat.name}</h1>;
}

export default ChatItem3;
