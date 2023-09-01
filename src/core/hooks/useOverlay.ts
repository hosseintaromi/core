import { MutableRefObject, useEffect } from "react";
import { openView } from "../utils/viewManager";
import { OverlayEventType } from "../components/containers/OverlayContainer";

export interface OverlayData<T, U> {
  event: OverlayEventType;
  component: (props?: any) => JSX.Element;
  data?: T;
  backdrop?: boolean;
  className?: string;
  positionType?: "ByEvent" | "ByElement";
  position?: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";
  getTargetElement?: () => HTMLElement;
  onClose?: (res?: U) => void;
  mapDataTo?: (data?: T) => any;
}

export interface OverlayConfig<T, U> {
  event: OverlayEventType;
  component: (props?: any) => JSX.Element;
  backdrop?: boolean;
  className?: string;
  positionType?: "ByEvent" | "ByElement";
  position?: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";
  onClose: (res?: U) => void;
  mapDataTo?: (data?: T) => any;
}

export const useOverlay = <T, U>(overlayData: OverlayData<T, U>) => {
  const elRef: MutableRefObject<any> = { current: null };

  const openMenu = (event: MouseEvent) => {
    openView<T>({
      type: "Overlay",
      component: overlayData.component,
      data: overlayData.mapDataTo?.(overlayData.data),
      onClose: (res?: U) => {
        overlayData.onClose?.(res);
      },
      options: {
        disableBackdrop: !overlayData.backdrop,
        params: {
          event,
          target:
            overlayData.getTargetElement?.() || elRef.current || event.target,
          position: overlayData.position,
        },
      },
    });
  };

  useEffect(() => {
    switch (overlayData.event) {
      case OverlayEventType.Click:
        elRef.current.addEventListener("click", (event: MouseEvent) => {
          openMenu(event);
        });
        return;
      case OverlayEventType.DoubleClick:
        elRef.current.addEventListener("dblclick", (event: MouseEvent) => {
          openMenu(event);
        });
        return;
      case OverlayEventType.RightClick:
        return;
      default:
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elRef;
};
