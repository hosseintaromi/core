import { L } from "./L";
import { Observable } from "./observable";

class LocaleObservable extends Observable<L> {
  getId(locale: L) {
    return "locale";
  }
}
export const localeObservable = new LocaleObservable();

var locales: L = {
  delete_chat: "Delete chat",
  add_chat: "Add chat",
};

export interface Chat {
  id: string;
  name: string;
}

export function getLocales(lang_code: string): L {
  return {
    delete_chat: "حذف چت",
    add_chat: "افزودن چت",
  } as any;
}

export function getLocale(key: keyof L): string {
  return locales[key];
}

export function setLang(lang_code: string) {
  locales = getLocales(lang_code);
  localeObservable.update(locales);
}
