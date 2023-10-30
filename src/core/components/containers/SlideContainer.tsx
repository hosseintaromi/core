import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { ViewComponent } from "../ViewComponent";
import ViewContextProvider from "../../context/ViewContextProvider";
import { useViewManage } from "../../hooks/useViewManage";
import { openView } from "../../utils/viewManager";
import { EventType, TouchEvent, useEvent } from "../../hooks/useEvent";
import { useAnimate } from "../../hooks/useAnimate";
import ElementRef from "./ElementRef";

export interface SlideComponent {
  title: string;
  component: (props?: any) => JSX.Element;
  ref?: HTMLElement;
}

export interface SlideInlineData<T, U> {
  id?: string;
  event: EventType;
  elRef?: MutableRefObject<HTMLElement>;
  data?: T;
  title?: string;
  className?: string;
  components: SlideComponent[];
  onClose?: (res?: U) => void;
  mapDataTo?: (data?: T) => any;
  show?: (show: boolean) => void;
}

const SlideContainer = <T, U>({
  config,
}: {
  config: SlideInlineData<T, U>;
}) => {
  const containerType = "slide-" + Date.now();
  const lastViewIndex = config.components.length - 1;
  const effectivePercent = 50;
  const maxDuration = 600;
  const minDuration = 300;
  const components = config.components;
  // const slideIn = bezier(0.25, 1, 0.5, 1);

  const containerRef = useRef<any>(null);
  const viewIndexRef = useRef<number>(0);
  const startMoveXRef = useRef<number>(0);
  const touchTimeRef = useRef<number>(0);
  const transformPercentRef = useRef<number>(0);
  const animateRequestRef = useRef<() => void>();

  const { requestAnimate, cancelAnimate } = useAnimate();

  useEvent(containerRef, EventType.HorizontalSwipe, {
    onTouchStart: (e: TouchEvent) => {
      touchTimeRef.current = Date.now();
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
        component: config.components[index].component,
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

  const hideViews = (elements: (HTMLElement | any)[]) => {
    elements.forEach((el) => {
      if (el) {
        el.style.display = "none";
      }
    });
  };

  const getContainerWidth = () => containerRef.current.clientWidth;

  const setPointer = (index: number, percent: number, left: boolean) => {
    const el = components[index].ref!;
    el.style.display = "block";
    const width = el.clientWidth;
    el.style.left = "auto";
    el.style.right = "auto";
    const transforming = percent % 100 !== 0;
    el.style.borderRadius = `${transforming && left ? 0 : 3}px ${
      transforming && !left ? 0 : 3
    }px 0 0`;
    el.style[left ? "left" : "right"] = (percent * width) / 100 + "px";
  };

  const transform = (
    percent: number,
    fromIndex: number,
    toIndex: number,
    animate?: boolean,
  ) => {
    console.log(transformPercentRef.current, percent);

    if ((transformPercentRef.current || 0) === percent) {
      return;
    }
    transformPercentRef.current = percent % 100;
    const from = getView(fromIndex);
    const to = getView(toIndex);
    let direction = fromIndex > toIndex ? 1 : -1;
    hideViews(viewsInfo.map((x) => x.elRef));
    hideViews(components.map((x) => x.ref));
    if (percent % 100 === 0) {
      direction = 0;
    }

    if (from && ((animate && percent !== 100) || (!animate && percent !== 0))) {
      const style = from.style;
      style.transform = `translateX(${direction * percent}%)`;
      style.display = "block";
      setPointer(fromIndex, -percent, fromIndex > toIndex);
    }
    if (to && ((animate && percent !== 0) || (!animate && percent !== 100))) {
      const style = to.style;
      style.transform = `translateX(${direction * (percent - 100)}%)`;
      style.display = "block";
      setPointer(toIndex, percent - 100, fromIndex < toIndex);
    }
  };

  const sweep = (e: TouchEvent) => {
    const moveInfo = getNewXMove(viewIndexRef.current, e.moveX);
    if (
      viewIndexRef.current === moveInfo.to &&
      transformPercentRef.current === 0 &&
      e.moveX === 0
    ) {
      return;
    }

    transform(moveInfo.percent, moveInfo.from, moveInfo.to);
  };

  const animate = (moveX: number) => {
    const moveInfo = getNewXMove(viewIndexRef.current, moveX);
    const basePercent = moveInfo.percent;
    if (basePercent === 0) {
      startMoveXRef.current = 0;
      viewIndexRef.current = moveInfo.to;
      return;
    }
    const backward = basePercent < effectivePercent;
    const remainPercent = (backward ? basePercent : 100 - basePercent) / 100;

    const containerWidth = getContainerWidth();
    const touchTime = Date.now() - touchTimeRef.current;
    const touchDuration =
      ((backward ? containerWidth - moveX : moveX) * touchTime) / moveX;
    startMoveXRef.current = moveInfo.totalXMove;
    animateRequestRef.current = requestAnimate(
      Math.max(
        remainPercent * minDuration,
        Math.min(touchDuration, remainPercent * maxDuration),
      ),
      (t) => {
        const percent = backward
          ? basePercent * (1 - t)
          : basePercent + (100 - basePercent) * t;
        startMoveXRef.current = moveInfo.totalXMove;
        transform(percent, moveInfo.from, moveInfo.to, true);
      },
      () => {
        startMoveXRef.current = 0;
        viewIndexRef.current = !backward ? moveInfo.to : moveInfo.from;
      },
    );
  };

  const getNewXMove = (index: number, moveX: number) => {
    const containerWidth = getContainerWidth();
    let totalXMove = startMoveXRef.current + moveX;
    if (totalXMove >= 0) {
      const maxMoveX = index * containerWidth;
      totalXMove = Math.min(maxMoveX, totalXMove);
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
      moveX: newXMove,
      totalXMove: totalXMove,
    };
  };

  useEffect(() => {
    hideViews(components.map((x) => x.ref));
    setPointer(0, 0, true);
    openConfigView(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="slide-inline-container">
      <ul className="slide-tabs">
        {config.components?.map((component, index) => (
          <li key={index}>
            {component.title}
            <ElementRef
              className="pointer"
              onLoad={(ref) => {
                component.ref = ref;
              }}
            />
          </li>
        ))}
      </ul>
      <div className="slider-container">
        {viewsInfo?.map((viewInfo) => (
          <React.Fragment key={viewInfo.id}>
            <ViewContextProvider viewInfo={viewInfo}>
              <ViewComponent viewInfo={viewInfo} />
            </ViewContextProvider>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SlideContainer;
