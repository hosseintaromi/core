import React from "react";
import { useEffect, ReactNode } from "react";

export function ItemWrapper({ children }: { children: ReactNode }) {
	useEffect(() => {
		debugger;
	}, []);
	return <>{children}</>;
}
