import React from "react";
export interface MenuOptions {
    options: Option[];
}
export interface Option {
    label: string;
    value: string;
}
declare function Menu(): React.JSX.Element;
export default Menu;
