import { Chat } from "../stores/chat";
export declare const useChatObserver: (chat: Chat, remove?: ((chat: Chat) => void) | undefined, update?: ((chat: Chat) => void) | undefined) => Chat;
export declare const useChatObserverProp: (chat: Chat, prop: keyof Chat) => string;
