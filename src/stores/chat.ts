import { Observable } from "./observable";

class ChatObservable extends Observable<Chat> {
  getId(chat: Chat) {
    return chat.id;
  }
}
export const chatObservable = new ChatObservable();

const chats: Chat[] = [
  { id: "1", name: "ali" },
  { id: "2", name: "reza" },
];

export interface Chat {
  id: string;
  name: string;
}

export function getChats() {
  return chats;
}

export function chatUpdate() {
  const chat = chats[1];
  chat.name = "Hasan";
  chatObservable.update(chat);
}

export interface ChatInput {
  id: string;
}

export interface ChatOutput {
  id: string;
  name: string;
}

export const apiPost =
  <T, U>(method: string) =>
    (input: T) =>
      Promise.resolve<U>({} as U);

export const getChatsApi = apiPost<ChatInput, ChatOutput>("getChatsApi");
