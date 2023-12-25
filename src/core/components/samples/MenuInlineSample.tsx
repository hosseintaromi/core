import { getChats, chatUpdate, Chat } from "../../stores/chat";
import { Message, getMessages, messageUpdate } from "../../stores/message";
import ChatItem from "./ChatItem";
import { useState, memo } from "react";
import ItemWrapper from "./ItemWrapper";
import useInit from "../../hooks/useInit";

function MenuInlineSample() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useInit(() => {
    const chats = getChats();
    const messages = getMessages();
    setChats(chats);
    setMessages(messages);
    setTimeout(() => {
      messageUpdate();
      chatUpdate();
    }, 3000);
  });

  return (
    <div>
      {chats?.map((chat, index) => (
        <ItemWrapper key={index}>
          <ChatItem chat={chat} message={messages[index]} />
        </ItemWrapper>
      ))}
      {/* {chats?.map((chat, index) => (
        <ChatItem2 key={index} chat={chat} />
      ))} */}
    </div>
  );
}

export default MenuInlineSample;
