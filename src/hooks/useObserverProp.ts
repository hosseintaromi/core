import { useState } from "react";
import { IObservable } from "../stores/observable";
import useInit from "./useInit";
import useFn from "./useFn";

export const useObserverProp = <T>(
  observable: IObservable<T>,
  subject: T,
  prop: keyof T,
) => {
  const [propState, setPropState] = useState(subject[prop]);

  const subscribe = useFn((action: string, newSubject: T) => {
    switch (action) {
      case "Update":
        if (newSubject === subject && typeof newSubject[prop] === "object") {
          setPropState({ ...newSubject[prop] });
        } else {
          setPropState(newSubject[prop]);
        }
        break;
    }
  });

  useInit(() => {
    observable.on(subscribe, subject);

    return () => {
      observable.off(subscribe, subject);
    };
  });

  return propState;
};
