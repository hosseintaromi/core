import { Observable } from "./observable";
declare class ChatObservable extends Observable<Chat> {
    getId(chat: Chat): string;
}
export declare const chatObservable: ChatObservable;
export interface Chat {
    id: string;
    name: string;
}
export declare function getChats(): Chat[];
export declare function chatUpdate(): void;
export interface ChatInput {
    id: string;
}
export interface ChatOutput {
    id: string;
    name: string;
}
export declare const apiPost: <T, U>(method: string) => (input: T) => Promise<Awaited<U>>;
export declare const getChatsApi: (input: ChatInput) => Promise<ChatOutput>;
export {};
