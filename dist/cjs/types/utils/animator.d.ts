export declare function requestAnimation(speed: number, animate: (t: number) => void, completed: () => void, canceled?: () => void): () => void;
export type EasingType = "easeOutSine" | "easeInOut" | "easeInOutQuad";
