import type { LocaleKeyTypes } from "../@types/locale";
import { Observable } from "./observable";

type Locale = Record<LocaleKeyTypes, string>;

class LocaleObservable extends Observable<string> {
  getId() {
    return "locale";
  }
}

export const localeObservable = new LocaleObservable();

export function getLocales(lang_code: string): Locale {
  switch (lang_code) {
    case "fa":
      return {
        delete_chat: "حذف چت",
        add_chat: "افزودن چت",
        add_message: "افزودن پیام",
        add_user: "افزودن کاربر",
        delete_message: "حذف پیام",
        delete_user: "حذف کاربر",
      };
    case "en":
    default:
      return {
        delete_chat: "delete chat",
        add_chat: "add chat",
        add_message: "add message",
        add_user: "add user",
        delete_message: "delete message",
        delete_user: "delete user",
      };
  }
}
var localeKey = "en";
var locales: Locale = getLocales(localeKey);

export function getLocale(key: LocaleKeyTypes): string {
  return locales[key];
}

export function setLang(lang_code: string) {
  localeKey = lang_code;
  locales = getLocales(lang_code);
  localeObservable.emit("Change", lang_code);
}

export function getCurrentLocaleKey() {
  return localeKey;
}
