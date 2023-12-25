import React, { useEffect } from "react";
import { MessageType } from "../@types/commonView";
import { openView } from "../utils";
import { Toast } from "../components";
import MasterTabContainer from "../components/containers/MasterTabContainer";
import ToastContainer from "../components/containers/ToastContainer";

interface Props {
	message: string;
	type: MessageType;
	advanced: boolean;
	margin?: number;
	padding?: number;
	cornerRadius?: number;
}

export function Container({
	message,
	type,
	advanced,
	margin,
	padding,
	cornerRadius,
}: Props) {
	const openToast = () => {
		openView({
			type: "Toast",
			id: "toastSample",
			data: {
				message: message,
				type: type,
			},
			component: Toast,
		});
	};

	useEffect(() => {
		console.log();
		openView({
			type: "Toast",
			id: "Parent1",
			data: {
				message: "this is toast",
			},
			component: MasterTabContainer,
		});
		openView({
			type: "Toast",
			id: "Parent2",
			data: {
				message: "this is toast",
			},
			component: MasterTabContainer,
		});
	}, []);

	return (
		<>
			<div
				style={{
					width: "30px",
					height: "30px",
					backgroundColor: "red",
				}}
			></div>
			<button
				className="col-3 btn btn-success"
				onClick={() => openToast()}
			>
				Open Toast
			</button>
			<ToastContainer />
		</>
	);
}
