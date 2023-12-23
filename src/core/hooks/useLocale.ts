import { useCallback, useEffect, useRef } from "react";
import { useLocaleObserver } from "./useLocaleObserver";
import { L } from "../stores/L";
import { useObserver } from "./useObserver";
import { getLocale, getLocales, localeObservable } from "../stores/locale";

export const useLocale = () => {
  const _locale = useObserver(localeObservable, getLocales("fa"));

  // useEffect(
  //   () => {
  //     if (callback) {
  //       timeout(callback, delay);
  //     }
  //     return () => {
  //       clearAll();
  //     };
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [],
  // );

  const locale = useCallback(
    (key: keyof L) => getLocale(key),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return locale;
};
