import React from "react";
import { getChats, chatUpdate, Chat } from "../../stores/chat";
import { ChatItem } from "./ChatItem";
import { useEffect, useState, memo } from "react";
import { ItemWrapper } from "./ItemWrapper";
import { Message, getMessages, messageUpdate } from "../../stores/message";

export function MenuInlineSample() {
	const [chats, setChats] = useState<Chat[]>([]);
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(
		() => {
			const chats = getChats();
			const messages = getMessages();
			setChats(chats);
			setMessages(messages);
			setTimeout(() => {
				messageUpdate();
				chatUpdate();
			}, 3000);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

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
