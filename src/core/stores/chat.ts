import { Observable } from "./observable";

export interface Chat {
  id: string;
  name: string;
}

class ChatStore extends Observable<Chat> {
  private chats: Chat[] = [
    { id: "1", name: "ali" },
    { id: "2", name: "reza" },
  ];

  getId(subject: Chat): string {
    return subject.id;
  }

  getChats() {
    return this.chats;
  }

  updateTest() {
    const chat = this.chats[1];
    chat.name = "Hasan";
    this.emit("Update", chat);
  }
}
const store = new ChatStore();
export default store;
