export declare const useAnimate: () => {
    requestAnimate: (duration: number, animate: (t: number) => void, completed: () => void, canceled?: () => void) => () => void;
    cancelAnimate: (cancelRequest: () => void) => void;
};
