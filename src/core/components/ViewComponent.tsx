import { useEffect, useRef } from "react";
import { ViewInfo } from "../@types/view";

export function ViewComponent({ viewInfo }: { viewInfo: ViewInfo }) {
  const elRef = useRef<any>(null);
  const className = viewInfo.view.className;

  useEffect(() => {
    viewInfo.elRef = elRef.current;
    viewInfo.onInit?.(elRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={elRef}
      className={"view-wrapper" + (className ? ` ${className}` : "")}
    >
      {viewInfo.view.component()}
    </div>
  );
}
