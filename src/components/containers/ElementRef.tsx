import { ReactNode, useRef } from "react";
import useInit from "../../hooks/useInit";
import React from "react";

const ElementRef = ({
  className,
  children,
  onLoad,
}: {
  className: string;
  children?: ReactNode;
  onLoad?: (ref: HTMLElement) => void;
}) => {
  const elRef = useRef<any>();
  useInit(() => {
    onLoad?.(elRef.current);
  });

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default ElementRef;
