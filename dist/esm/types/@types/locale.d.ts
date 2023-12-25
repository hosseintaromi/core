declare const locale: {
    user: {
        delete_user: string;
        add_user: string;
    };
    message: {
        add_message: string;
        delete_message: string;
    };
    chat: {
        add_chat: string;
        delete_chat: string;
    };
};
export type LocaleRootPropes = keyof typeof locale;
export type LocaleKeyProp<T extends LocaleRootPropes> = keyof (typeof locale)[T];
export type LocaleKeyUser = LocaleKeyProp<"user">;
export type LocaleKeyMessage = LocaleKeyProp<"message">;
export type LocaleKeyChat = LocaleKeyProp<"chat">;
export type LocaleKeyTypes = LocaleKeyUser | LocaleKeyMessage | LocaleKeyChat;
export {};
