import { IObservable } from "../stores/observable";
export declare const useObserver: <T>(observable: IObservable<T>, subject: T, remove?: ((subject: T) => void) | undefined, update?: ((subject: T) => void) | undefined) => T;
