import React, { MutableRefObject } from "react";
import { EventType } from "../../hooks/useEvent";
export interface OverlayInlineData<T, U> {
    id?: string;
    event: EventType;
    elRef?: MutableRefObject<HTMLElement>;
    data?: T;
    className?: string;
    component: (props?: any) => JSX.Element;
    onClose?: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
    show?: (show: boolean) => void;
}
declare const OverlaySlideContainer: <T, U>({ config, }: {
    config: OverlayInlineData<T, U>;
}) => React.JSX.Element;
export default OverlaySlideContainer;
