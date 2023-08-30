import { useEffect, useRef } from "react";
import { ViewInfo } from "../@types/page";

export function PageComponent({ pageInfo }: { pageInfo: ViewInfo }) {
  const elRef = useRef<any>(null);
  const className = pageInfo.view.className;

  useEffect(() => {
    pageInfo.elRef = elRef.current;
    pageInfo.onInit?.(elRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={elRef}
      className={"tab-container" + (className ? " " + className : "")}
    >
      {pageInfo.view.component()}
    </div>
  );
}
