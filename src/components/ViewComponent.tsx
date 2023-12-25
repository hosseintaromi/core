import { useRef } from "react";
import { ViewInfo } from "../@types/view";
import useInit from "../hooks/useInit";

export function ViewComponent({ viewInfo }: { viewInfo: ViewInfo }) {
  const elRef = useRef<any>(null);
  const className = viewInfo.view.className;

  useInit(() => {
    viewInfo.elRef = elRef.current;
    viewInfo.onInit?.(elRef.current);
  });

  return (
    <div
      ref={elRef}
      className={"view-wrapper" + (className ? ` ${className}` : "")}
    >
      {viewInfo.view.component()}
    </div>
  );
}
