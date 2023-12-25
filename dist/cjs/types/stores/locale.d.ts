import type { LocaleKeyTypes } from "../@types/locale";
import { Observable } from "./observable";
type Locale = Record<LocaleKeyTypes, string>;
declare class LocaleObservable extends Observable<string> {
    getId(): string;
}
export declare const localeObservable: LocaleObservable;
export declare function getLocales(lang_code: string): Locale;
export declare function getLocale(key: LocaleKeyTypes): string;
export declare function setLang(lang_code: string): void;
export declare function getCurrentLocaleKey(): string;
export {};
