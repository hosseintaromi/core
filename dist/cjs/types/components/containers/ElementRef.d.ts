import { ReactNode } from "react";
import React from "react";
declare const ElementRef: ({ className, children, onLoad, }: {
    className: string;
    children?: ReactNode;
    onLoad?: ((ref: HTMLElement) => void) | undefined;
}) => React.JSX.Element;
export default ElementRef;
