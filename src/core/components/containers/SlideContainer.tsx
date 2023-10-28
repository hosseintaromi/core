import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import { bezier } from "../../utils/bezier";
import { openView } from "../../utils/viewManager";
import { EventType, TouchEvent, useEvent } from "../../hooks/useEvent";
import { useAnimate } from "../../hooks/useAnimate";

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
  const containerType = "slide-inline-" + Date.now();
  const lastViewIndex = config.components.length - 1;
  const effectivePercent = 50;
  const defaultSpeed = 500;
  const slideIn = bezier(0.25, 1, 0.5, 1);

  const containerRef = useRef<any>(null);
  const viewIndexRef = useRef<number>(0);
  const startMoveXRef = useRef<number>(0);
  const animateRequestRef = useRef<() => void>();

  const { requestAnimate, cancelAnimate } = useAnimate();

  useEvent(containerRef, EventType.HorizontalSwipe, {
    onTouchStart: (e: TouchEvent) => {
      const animateRequest = animateRequestRef.current;
      if (animateRequest) {
        cancelAnimate(animateRequest);
        animateRequestRef.current = undefined;
      }
      sweep(e);
    },
    onTouchMove: (e: TouchEvent) => {
      sweep(e);
    },
    onTouchEnd: (e: TouchEvent) => {
      sweep(e);
      animate(e.moveX);
    },
  });

  const { viewsInfo } = useViewManage(containerType, 6, {
    moveBetweenViews: true,
    disableBrowserHistory: true,
  });

  const openConfigView = useCallback(
    async (index: number) => {
      let viewInfo = viewsInfo.find((x) => x.id === index + "");
      if (viewInfo) {
        return;
      }
      await openView({
        id: index + "",
        type: containerType,
        component: config.components[index],
        data: config.data,
        className: config.className,
        options: { disableAnimate: true, inBackground: index > 0 },
      });
      viewInfo = viewsInfo.find((x) => x.id === index + "");
      const ref = viewInfo?.elRef;
      ref!.style.display = "block";
      if (index > 0) {
        ref!.style.transform = `translateX(100%)`;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const getView = (index: number) => {
    if (index < 0 || index > lastViewIndex) {
      return;
    }
    const view = viewsInfo.find((x) => x.id === index + "");
    if (!view) {
      openConfigView(index);
    }
    return view?.elRef;
  };

  const hideViews = () => {
    viewsInfo.forEach((x) => {
      if (x.elRef) {
        x.elRef.style.display = "none";
      }
    });
  };

  const getContainerWidth = () => containerRef.current.clientWidth;

  const transform = (
    percent: number,
    fromIndex: number,
    toIndex: number,
    animate?: boolean,
  ) => {
    const from = getView(fromIndex);
    const to = getView(toIndex);
    let direction = fromIndex > toIndex ? 1 : -1;
    hideViews();
    if (percent % 100 === 0) {
      direction = 0;
    }

    if (from && ((animate && percent !== 100) || (!animate && percent !== 0))) {
      const style = from.style;
      style.transform = `translateX(${direction * percent}%)`;
      style.display = "block";
    }
    if (to && ((animate && percent !== 0) || (!animate && percent !== 100))) {
      const style = to.style;
      style.transform = `translateX(${direction * (percent - 100)}%)`;
      style.display = "block";
    }
  };

  const sweep = (e: TouchEvent) => {
    const moveInfo = getNewXMove(viewIndexRef.current, e.moveX);
    transform(moveInfo.percent, moveInfo.from, moveInfo.to);
  };

  const animate = (moveX: number) => {
    const moveInfo = getNewXMove(viewIndexRef.current, moveX);
    const percent = moveInfo.percent;
    if (percent === 0) {
      startMoveXRef.current = 0;
      viewIndexRef.current = moveInfo.to;
      return;
    }
    const durationSpeed =
      (percent < effectivePercent ? percent : 100 - percent) / 100;

    const containerWidth = getContainerWidth();
    startMoveXRef.current = moveInfo.totalXMove;
    animateRequestRef.current = requestAnimate(
      durationSpeed * defaultSpeed,
      (t) => {
        const basePercent = moveInfo.percent;
        const percent =
          basePercent < effectivePercent
            ? basePercent * (1 - t)
            : basePercent + (100 - basePercent) * t;
        startMoveXRef.current = moveInfo.totalXMove;
        transform(percent, moveInfo.from, moveInfo.to, true);
      },
      () => {
        startMoveXRef.current = 0;
        viewIndexRef.current =
          moveInfo.percent >= effectivePercent ? moveInfo.to : moveInfo.from;
      },
    );
  };

  const getNewXMove = (index: number, xMove: number) => {
    const containerWidth = getContainerWidth();
    let totalXMove = startMoveXRef.current + xMove;
    if (totalXMove >= 0) {
      const maxMove = index * containerWidth;
      totalXMove = Math.min(maxMove, totalXMove);
    } else {
      const minMove = (index - lastViewIndex) * containerWidth;
      totalXMove = Math.max(minMove, totalXMove);
    }
    const moveViewCount =
      (totalXMove <= 0 ? 1 : -1) *
      Math.ceil(Math.abs(totalXMove / containerWidth));
    const newXMove = totalXMove % containerWidth;
    let to = index + moveViewCount;
    const percent = (Math.abs(newXMove) / containerWidth) * 100;
    return {
      from: totalXMove < 0 ? to - 1 : to + 1,
      to,
      percent,
      xMove: newXMove,
      totalXMove: totalXMove,
    };
  };

  useEffect(() => {
    openConfigView(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="slide-inline-container">
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
