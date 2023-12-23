import { useEffect, useCallback, useState } from "react";
import { IObservable, ObservableActionType } from "../stores/observable";

export const useObserverProp = <T>(
  observable: IObservable<T>,
  subject: T,
  prop: keyof T,
) => {
  const [propState, setPropState] = useState(subject[prop]);

  const subscribe = useCallback(
    (action: ObservableActionType, newSubject: T) => {
      switch (action) {
        case "Update":
          if (newSubject === subject && typeof newSubject[prop] === "object") {
            setPropState({ ...newSubject[prop] });
          } else {
            setPropState(newSubject[prop]);
          }
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(
    () => {
      observable.on(subject, subscribe);

      return () => {
        observable.off(subject, subscribe);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return propState;
};
