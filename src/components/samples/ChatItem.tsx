import React from "react";
import { useObservable } from "../../hooks/useObservable";
import observables, { Chat } from "../../stores/observable-objects";

export function ChatItem({ chat }: { chat: Chat }) {
	const _chat = useObservable(observables.chat, chat);

	return <h1>{_chat.name}</h1>;
}
