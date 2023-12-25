import { MutableRefObject } from "react";
export declare enum EventType {
    None = "None",
    Tap = "Tap",
    RightClick = "RightClick",
    DoubleClick = "DoubleClick",
    Hover = "Hover",
    Press = "Press",
    HorizontalSwipe = "HorizontalSwipe",
    VerticalSwipe = "VerticalSwipe"
}
export interface EventHandler {
    onTouchStart?: (e: TouchEvent) => void;
    onTouchMove?: (e: TouchEvent) => void;
    onTouchEnd?: (e: TouchEvent) => void;
    onTap?: (e: Event) => void;
    onRightClick?: (e: Event) => void;
    onDoubleClick?: (e: Event) => void;
    onPress?: (e: Event) => void;
    onMouseover?: (e: Event) => void;
    onMouseout?: (e: Event) => void;
}
export interface TouchEvent {
    x: number;
    y: number;
    moveX: number;
    moveY: number;
    e: Event;
}
export interface Position {
    x: number;
    y: number;
}
export declare const useEvent: (elRef: MutableRefObject<HTMLElement | undefined>, eventType: EventType, events: EventHandler) => {
    updateRef: () => void;
};
