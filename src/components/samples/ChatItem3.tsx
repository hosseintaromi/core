import React from "react";
import { useObservable } from "../../hooks/useObservable";
import { Chat, observables } from "../../stores/observable-objects";

export function ChatItem3({ chat }: { chat: Chat }) {
	const _chat = useObservable(observables.chat, chat);

	return <h1>{_chat.name}</h1>;
}
