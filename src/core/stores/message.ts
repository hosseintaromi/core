import { Observable } from "./observable";

export interface Message {
  id: string;
  text: string;
}

class MessageObservable extends Observable<Message> {
  getId(message: Message) {
    return message.id;
  }
}

const messages: Message[] = [
  { id: "1", text: "hello" },
  { id: "2", text: "world" },
];

export function getMessages() {
  return messages;
}

export function messageUpdate() {
  const msg = messages[1];
  msg.text = "by";
  msgObservable.update(msg);
}

export const msgObservable = new MessageObservable();
