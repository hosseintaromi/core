import { MutableRefObject } from "react";
export declare const useClickAsync: <T>(asyncRequest: () => Promise<T>, success?: ((res: T) => void) | undefined, failed?: ((error: string) => void) | undefined) => MutableRefObject<any>;
