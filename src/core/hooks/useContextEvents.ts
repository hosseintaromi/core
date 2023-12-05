import { useEffect, useRef } from "react";

type GenericEventFn = <U = any>(data: U) => void;

export type GenericEvents<T extends Record<keyof T, GenericEventFn>> = {
  [eventName in keyof T]?: GenericEventFn;
};

export const useContextEvents = <
  Y extends Record<keyof Y, GenericEventFn>,
  T = any,
>(
  context: React.Context<T>,
) => {
  let myIdentity: GenericEventFn = <Number>(arg: Number) => {};
  myIdentity("ali");
  const listenersRef = useRef<{
    [key in keyof Y]: GenericEventFn[];
  }>({} as any);
  const eventContext: any = context;
  if (!eventContext.__listeners) {
    eventContext.__listeners = {};
    eventContext.__events = {};
  }

  const listen = (events?: GenericEvents<Y>) => {
    if (!events) {
      return;
    }
    const __listeners = eventContext.__listeners;
    for (let event in events) {
      if (!__listeners[event]) {
        bindCall(event);
        __listeners[event] = [];
      }
      __listeners[event].push(events[event]);
      let listeners: GenericEventFn[] = listenersRef.current[event];
      if (!listeners) {
        listeners = listenersRef.current[event] = [];
      }
      listeners.push(events[event]!);
    }
  };

  const bindCall = (event: Extract<keyof Y, string>) => {
    const __listeners = eventContext.__listeners;
    eventContext.__events[event] = (data?: any) => {
      (__listeners[event] || []).forEach((listener: any) => {
        listener?.(data);
      });
    };
  };

  useEffect(
    () => () => {
      console.log("useContextEvents", "useEffect");
      const __listeners = eventContext.__listeners;
      const localListeners = listenersRef.current;
      for (let key in localListeners) {
        const items: GenericEventFn[] = localListeners[key];
        items.forEach((event: GenericEventFn) => {
          const index = __listeners[key].findIndex(
            (x: GenericEventFn) => x === event,
          );
          __listeners[key].splice(index, 1);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    listen,
    call: eventContext.__events as GenericEvents<Y>,
  };
};

export default useContextEvents;
