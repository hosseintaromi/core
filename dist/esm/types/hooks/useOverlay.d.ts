import { MutableRefObject } from "react";
import { EventType } from "./useEvent";
export interface OverlayData<T, U> {
    event: EventType;
    component: (props?: any) => JSX.Element;
    data?: T;
    backdrop?: boolean;
    className?: string;
    position?: "TopLeft" | "TopCenter" | "TopRight" | "BottomLeft" | "BottomCenter" | "BottomRight";
    positionType?: "ByEvent" | "ByElement";
    getTargetElement?: () => HTMLElement;
    onClose?: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
}
export interface OverlayConfig<T, U> {
    event: EventType;
    component: (props?: any) => JSX.Element;
    backdrop?: boolean;
    className?: string;
    positionType?: "ByEvent" | "ByElement";
    position?: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";
    onClose: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
}
export declare const useOverlay: <T, U>(overlayData: OverlayData<T, U>) => MutableRefObject<any>;
