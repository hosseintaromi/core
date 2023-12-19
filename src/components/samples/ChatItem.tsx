import React from "react";
import { useObservable } from "../../hooks";
import useContextEvents from "../../hooks/useContextEvents";
import { Chat, Message, chatObservable } from "../../stores";
import { useEffect } from "react";

function ChatItem({ chat, message }: { chat: Chat; message: Message }) {
	const _chat = useObservable(chatObservable, chat);

	const { listen, call } = useContextEvents<{ onReady: "onReady" }, any>(
		{} as any
	);
	useEffect(() => {
		listen({ onReady: (data: any) => {} });
		call.onReady?.({ name: "ali" });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<h1>{_chat.name}</h1>
		</>
	);
}

export default ChatItem;
