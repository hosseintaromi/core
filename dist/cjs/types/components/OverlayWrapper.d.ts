import React from "react";
import { ReactNode } from "react";
import { OverlayConfig } from "../hooks/useOverlay";
export declare function ContextMenuWrapper<T, U>({ children, contextMenuConfig, data, onSelect, }: {
    children: ReactNode;
    contextMenuConfig: OverlayConfig<T, U>;
    data?: T;
    onSelect?: (res?: U) => void;
}): React.JSX.Element;
