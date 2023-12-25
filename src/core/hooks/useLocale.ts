import { LocaleKeyTypes } from "../@types/locale";
import { useState } from "react";
import {
  getCurrentLocaleKey,
  getLocale,
  localeObservable,
} from "../stores/locale";
import useInit from "./useInit";
import useFn from "./useFn";

export const useLocale = <T extends LocaleKeyTypes = LocaleKeyTypes>() => {
  const [localeKey, setLocaleKey] = useState<string>(getCurrentLocaleKey());

  const subscribe = useFn((action: string, newKey: string) => {
    if (newKey !== localeKey) {
      setLocaleKey(newKey);
    }
  });

  useInit(() => {
    localeObservable.on(subscribe);

    return () => {
      localeObservable.off(subscribe);
    };
  });

  const locale = useFn((key: T) => getLocale(key));

  return locale;
};
