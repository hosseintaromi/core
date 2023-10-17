import { useObservable } from "../../hooks/useObservable";
import store, { Chat } from "../../stores/chat";

function ChatItem({ chat }: { chat: Chat }) {
  const _chat = useObservable(store, chat);

  return <h1>{_chat.name}</h1>;
}

export default ChatItem;
