import { MutableRefObject, useEffect } from "react";

export enum EventType {
  Click = "Click",
  RightClick = "RightClick",
  DoubleClick = "DoubleClick",
  Press = "Press",
  Hover = "Hover",
}

export interface EventConfig<T> {
  event: EventType;
  handler: (res?: T) => void;
  elRef: MutableRefObject<HTMLElement>;
}

export const useEvent = <T>(config: EventConfig<T>) => {
  const handleClickEvent = () => {
    config.elRef.current.addEventListener("click", () => {
      config.handler();
    });
  };

  const handleDoubleClickEvent = () => {};

  const handleRightClickEvent = () => {};

  const handlePressEvent = () => {};

  const handleHoverEvent = () => {};

  useEffect(() => {
    switch (config.event) {
      case EventType.Click:
        handleClickEvent();
        break;
      case EventType.DoubleClick:
        handleDoubleClickEvent();
        break;
      case EventType.Hover:
        handleHoverEvent();
        break;
      case EventType.Press:
        handlePressEvent();
        break;
      case EventType.RightClick:
        handleRightClickEvent();
        break;
    }
  }, []);
};
