import React from "react";
export interface MenuConfig {
    options: MenuOption[];
}
export interface MenuOption {
    text: string;
    value: string;
}
export declare function Overlay(): React.JSX.Element;
