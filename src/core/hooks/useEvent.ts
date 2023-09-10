import { MutableRefObject, useEffect, useRef } from "react";

export enum EventType {
  Click = "Click",
  RightClick = "RightClick",
  DoubleClick = "DoubleClick",
  Press = "Press",
  Hover = "Hover",
  MoveTopLeft = "MoveTopLeft",
  MoveTopRight = "MoveTopBottom",
  MoveBottomLeft = "MoveBottomLeft",
  MoveBottomRight = "MoveBottomRight",
}

export enum MoveDirection {
  TopLeft = "TopLeft",
  TopRight = "TopBottom",
  BottomLeft = "BottomLeft",
  BottomRight = "BottomRight",
  NoMove = "NoMove",
}

export interface Event {
  onTouchStart?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onTouchMove?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onTouchEnd?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onMouseDown?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onMouseUp?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onMousePress?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onMouseMoveTopLeft?: (
    e: globalThis.MouseEvent | globalThis.TouchEvent,
  ) => void;
  onMouseMoveTopRight?: (
    e: globalThis.MouseEvent | globalThis.TouchEvent,
  ) => void;
  onMouseMoveBottomLeft?: (
    e: globalThis.MouseEvent | globalThis.TouchEvent,
  ) => void;
  onMouseMoveBottomRight?: (
    e: globalThis.MouseEvent | globalThis.TouchEvent,
  ) => void;
  onRightClick?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onDoubleClick?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  onClick?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  windowMouseUp?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
  windowMouseDown?: (e: globalThis.MouseEvent | globalThis.TouchEvent) => void;
}

export interface Position {
  x: number;
  y: number;
}

export const useEvent = (
  elRef: MutableRefObject<HTMLElement>,
  eventType: EventType,
  events: Event,
) => {
  const timeOut = useRef<NodeJS.Timeout | undefined>();
  const startPosition = useRef<Position>();

  const calculateMoveDirection = (pos: Position) => {
    if (startPosition.current) {
      const dx = pos.x - startPosition.current.x;
      const dy = pos.y - startPosition.current.y;

      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return MoveDirection.NoMove;
      if (dx >= 0 && dy >= 0) return MoveDirection.TopRight;
      if (dx >= 0 && dy < 0) return MoveDirection.BottomRight;
      if (dx < 0 && dy >= 0) return MoveDirection.TopLeft;
      if (dx < 0 && dy < 0) return MoveDirection.BottomLeft;
    }
  };

  const handleMouseDown = (e: globalThis.MouseEvent) => {
    startPosition.current = { x: e.clientX, y: e.clientY };
    timeOut.current = setTimeout(() => {
      if (eventType === EventType.Press) {
      }
    }, 500);
  };

  const handleMouseUp = (e: globalThis.MouseEvent) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
      timeOut.current = undefined;
      if (eventType === EventType.Click) {
        events.onClick?.(e);
      }
    } else {
      handleMouseMove(e);
    }
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    const direction = calculateMoveDirection(e);
    switch (direction) {
      case MoveDirection.BottomLeft:
        if (eventType === EventType.MoveBottomRight)
          events.onMouseMoveBottomRight?.(e);
        break;
      case MoveDirection.BottomRight:
        if (eventType === EventType.MoveTopRight)
          events.onMouseMoveTopRight?.(e);
        break;
      case MoveDirection.TopLeft:
        if (eventType === EventType.MoveTopLeft) events.onMouseMoveTopLeft?.(e);
        break;
      case MoveDirection.TopRight:
        if (eventType === EventType.MoveBottomLeft)
          events.onMouseMoveBottomLeft?.(e);
        break;
      case MoveDirection.NoMove:
        if (eventType === EventType.Press) events.onMousePress?.(e);
        break;
    }
  };

  useEffect(() => {
    elRef.current.addEventListener("mousedown", (e: globalThis.MouseEvent) => {
      handleMouseDown(e);
    });
    elRef.current.addEventListener("mouseup", (e: globalThis.MouseEvent) => {
      handleMouseUp(e);
    });
    return () => {};
  }, []);
};
