import React from "react";

import { ReactNode, useRef } from "react";
import { OverlayConfig, useOverlay } from "../hooks/useOverlay";
import useInit from "../hooks/useInit";

export function ContextMenuWrapper<T, U>({
  children,
  contextMenuConfig,
  data,
  onSelect,
}: {
  children: ReactNode;
  contextMenuConfig: OverlayConfig<T, U>;
  data?: T;
  onSelect?: (res?: U) => void;
}) {
  const elRef = useRef<HTMLElement>(null);

  useInit(() => {
    menuRef.current = elRef.current?.children[0];
  });

  const menuRef = useOverlay<T, U>({
    component: contextMenuConfig.component,
    backdrop: contextMenuConfig.backdrop,
    className: contextMenuConfig.className,
    onClose: (res?: U) => {
      onSelect?.(res);
      contextMenuConfig.onClose(res);
    },
    position: contextMenuConfig.position,
    positionType: contextMenuConfig.positionType,
    event: contextMenuConfig.event,
    data,
    mapDataTo: contextMenuConfig.mapDataTo,
  });

  return <span ref={elRef}>{children}</span>;
}
