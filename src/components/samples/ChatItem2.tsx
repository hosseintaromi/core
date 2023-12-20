import React from "react";
import { Chat, chatObservable } from "../../stores/chat";
import { useObservable } from "../../hooks";

function ChatItem2({ chat }: { chat: Chat }) {
	useObservable(chatObservable, chat);

	return <h1>{chat.name}</h1>;
}

export default ChatItem2;
