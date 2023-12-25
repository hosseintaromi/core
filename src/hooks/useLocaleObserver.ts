import { LocaleKeyTypes } from "../@types/locale";
import { localeObservable } from "../stores/locale";
import { useObserver } from "./useObserver";

export const useLocaleObserver = (locale: LocaleKeyTypes) =>
  useObserver(localeObservable, locale);
