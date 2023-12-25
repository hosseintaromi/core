import React from "react";
import { Container as Toast } from "./Toast";
import { MessageType } from "../@types/commonView";
declare const _default: {
    title: string;
    component: typeof Toast;
    argTypes: {
        message: {
            control: string;
        };
        type: {
            control: string;
            options: typeof MessageType;
        };
        advanced: {
            control: string;
        };
        margin: {
            control: string;
            if: {
                arg: string;
            };
        };
        padding: {
            control: string;
            if: {
                arg: string;
            };
        };
        cornerRadius: {
            control: string;
            if: {
                arg: string;
            };
        };
    };
};
export default _default;
export declare const Info: (args: any) => React.JSX.Element;
