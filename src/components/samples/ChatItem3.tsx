import React from "react";
import { useObservable } from "../../hooks";
import { Chat, chatObservable } from "../../stores/chat";

function ChatItem3({ chat }: { chat: Chat }) {
	const _chat = useObservable(chatObservable, chat);

	return <h1>{_chat.name}</h1>;
}

export default ChatItem3;
