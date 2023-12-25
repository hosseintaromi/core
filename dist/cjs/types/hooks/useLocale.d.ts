import { LocaleKeyTypes } from "../@types/locale";
export declare const useLocale: <T extends LocaleKeyTypes = LocaleKeyTypes>() => (key: T) => string;
