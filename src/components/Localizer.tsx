import { LocalizerPropsType } from "../@types/LocalizerTypes";
import { useGlobalLocales } from "../hooks/useGlobalLocales";

export const Localizer = ({ localeKey, params }: LocalizerPropsType) => {
  const { convertLocale } = useGlobalLocales();

  return convertLocale({ key: localeKey, params }).element;
};
