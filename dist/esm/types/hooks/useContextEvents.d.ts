/// <reference types="react" />
type GenericEventFn = (data?: any) => void;
export type GenericEvents<T extends Record<keyof T, string>> = {
    [eventName in keyof T]?: GenericEventFn;
};
export declare const useContextEvents: <Y extends Record<string, string>, T = any>(context: import("react").Context<T>) => {
    listen: (events?: GenericEvents<Y> | undefined) => void;
    call: GenericEvents<Y>;
};
export default useContextEvents;
