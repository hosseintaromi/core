import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { ViewEvent } from "../../@types/view";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import { bezier } from "../../utils/bezier";
import { closeView, openView } from "../../utils/viewManager";
import { EventType, useEvent } from "../../hooks/useEvent";

export interface SlideInlineData<T, U> {
  id?: string;
  event: EventType;
  elRef?: MutableRefObject<HTMLElement>;
  data?: T;
  className?: string;
  components: ((props?: any) => JSX.Element)[];
  onClose?: (res?: U) => void;
  mapDataTo?: (data?: T) => any;
  show?: (show: boolean) => void;
}

const SlideContainer = <T, U>({
  config,
}: {
  config: SlideInlineData<T, U>;
}) => {
  const slideIn = bezier(0.25, 1, 0.5, 1);
  const containerRef = useRef<any>(null);
  const containerType = "slide-inline-" + Date.now();

  const setContainerOpacity = (opacity: number) => {
    containerRef.current.style.opacity = opacity;
  };

  const { viewsInfo } = useViewManage(
    containerType,
    6,
    { moveBetweenViews: true },
    {
      duration: 300,
      start(newView, prevView) {
        const newEl = newView.ref;
        const prevEl = prevView?.ref;

        if (prevEl) {
          newEl.style.transform = `translateX(${100}%)`;
        } else {
          newEl.style.opacity = "0";
        }
      },
      animate(t, newView, prevView) {
        const p = slideIn(t);
        const prevElStyle = prevView?.ref.style;
        const newElStyle = newView.ref.style;

        if (prevElStyle) {
          prevElStyle.transform = `translateX(${-p * 100}%)`;
          prevElStyle.opacity = `${1 - p}`;
          newElStyle.transform = `translateX(${(1 - p) * 100}%)`;
          newElStyle.opacity = `${p}`;
        } else {
          setContainerOpacity(p);
          newElStyle.opacity = `${p}`;
        }
      },
      end(newView, prevView) {},
    } as ViewEvent,
    {
      duration: 300,
      start(closeViewEl, activeViewEl) {},
      animate(t, closeViewEl, activeViewEl, config) {
        const p = slideIn(t);
        const newViewStyle = activeViewEl?.ref.style;
        const prevViewStyle = closeViewEl.ref.style;
        if (newViewStyle && config?.closeType === "Current") {
          prevViewStyle.transform = `translateX(${p * 100}%)`;
          prevViewStyle.opacity = `${1 - p}`;
          newViewStyle.transform = `translateX(${(p - 1) * 100}%)`;
          newViewStyle.opacity = `${p}`;
        } else {
          setContainerOpacity(1 - p);
        }
      },
      end(closeViewEl, activeViewEl) {},
    } as ViewEvent,
  );

  const openConfigView = useCallback(
    () => {
      config.components.forEach((component, index) => {
        openView({
          id: "slide-" + index,
          type: containerType,
          component: component,
          data: config.data,
          className: config.className,
          options: { disableAnimate: true, inBackground: index > 0 },
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEvent({ current: window as any }, EventType.Tap, {
    onTap: (e: Event) => {
      if (viewsInfo.length > 0 && !e.contains(containerRef.current)) {
        const view = viewsInfo[0].view;
        closeView(view.id, view.type, "All");
      }
    },
  });

  useEffect(() => {
    openConfigView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={viewsInfo.length === 0 ? "hidden" : "slide-inline-container"}
    >
      {viewsInfo?.map((viewInfo) => (
        <React.Fragment key={viewInfo.id}>
          <ViewContextProvider viewInfo={viewInfo}>
            <ViewComponent viewInfo={viewInfo} />
          </ViewContextProvider>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SlideContainer;
