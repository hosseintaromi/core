import React from "react";
import { withActions } from "@storybook/addon-actions/decorator";
import { Container as Toast } from "./Toast";
import { MessageType } from "../@types/commonView";

export default {
	title: "Example/Toast",
	component: Toast,
	argTypes: {
		message: { control: "text" },
		type: { control: "radio", options: MessageType },
		advanced: { control: "boolean" },
		// Only enabled if advanced is true
		margin: { control: "number", if: { arg: "advanced" } },
		padding: { control: "number", if: { arg: "advanced" } },
		cornerRadius: { control: "number", if: { arg: "advanced" } },
	},
};
export const Info = (args: any) => <Toast {...args}></Toast>;
