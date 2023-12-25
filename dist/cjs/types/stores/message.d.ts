import { ObjectObservable } from "./observable";
export interface Message {
    id: string;
    text: string;
}
declare class MessageObservable extends ObjectObservable<Message> {
    getId(message: Message): string;
}
export declare function getMessages(): Message[];
export declare function messageUpdate(): void;
export declare const msgObservable: MessageObservable;
export {};
