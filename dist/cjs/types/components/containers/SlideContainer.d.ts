import React, { MutableRefObject } from "react";
import { EventType } from "../../hooks/useEvent";
export interface SlideComponent {
    title: string;
    component: (props?: any) => JSX.Element;
    ref?: HTMLElement;
}
export interface SlideInlineData<T, U> {
    id?: string;
    event: EventType;
    elRef?: MutableRefObject<HTMLElement>;
    data?: T;
    title?: string;
    className?: string;
    components: SlideComponent[];
    onClose?: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
    show?: (show: boolean) => void;
}
declare const SlideContainer: <T, U>({ config, }: {
    config: SlideInlineData<T, U>;
}) => React.JSX.Element;
export default SlideContainer;
