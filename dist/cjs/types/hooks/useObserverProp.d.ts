import { IObservable } from "../stores/observable";
export declare const useObserverProp: <T>(observable: IObservable<T>, subject: T, prop: keyof T) => T[keyof T];
