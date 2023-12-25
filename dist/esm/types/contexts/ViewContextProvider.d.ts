import React from "react";
import { ReactNode } from "react";
import { ViewInfo, ViewContextType } from "../@types/view";
export declare const ViewContext: React.Context<ViewContextType>;
export declare const ViewContextProvider: React.MemoExoticComponent<({ children, viewInfo }: {
    children: ReactNode;
    viewInfo: ViewInfo;
}) => React.JSX.Element>;
