import { Chat, chatObservable } from "../stores/chat";
import { useObserver } from "./useObserver";
import { useObserverProp } from "./useObserverProp";

export const useChatObserver = (
  chat: Chat,
  remove?: (chat: Chat) => void,
  update?: (chat: Chat) => void,
) => useObserver(chatObservable, chat, remove, update);

export const useChatObserverProp = (chat: Chat, prop: keyof Chat) =>
  useObserverProp(chatObservable, chat, prop);
