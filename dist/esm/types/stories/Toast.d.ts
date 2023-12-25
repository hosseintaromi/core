import React from "react";
import { MessageType } from "../@types/commonView";
interface Props {
    message: string;
    type: MessageType;
    advanced: boolean;
    margin?: number;
    padding?: number;
    cornerRadius?: number;
}
export declare function Container({ message, type, advanced, margin, padding, cornerRadius, }: Props): React.JSX.Element;
export {};
