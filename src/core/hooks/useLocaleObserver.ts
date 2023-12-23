import { L } from "../stores/L";
import { localeObservable } from "../stores/locale";
import { useObserver } from "./useObserver";

export const useLocaleObserver = (locale: L) =>
  useObserver(localeObservable, locale);
