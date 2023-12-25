import { useState } from "react";
import { IObservable } from "../stores/observable";
import useInit from "./useInit";
import useFn from "./useFn";

export const useObserver = <T>(
  observable: IObservable<T>,
  subject: T,
  remove?: (subject: T) => void,
  update?: (subject: T) => void,
) => {
  const [subjectState, setSubjectState] = useState<T>(subject);

  const subscribe = useFn((action: string, newSubject: T) => {
    switch (action) {
      case "Update":
        if (newSubject === subject) {
          setSubjectState({ ...newSubject });
        } else {
          setSubjectState(newSubject);
        }
        update?.(newSubject);
        break;
      case "Delete":
        remove?.(newSubject);
        break;
    }
  });

  useInit(() => {
    observable.on(subscribe, subject);

    return () => {
      observable.off(subscribe, subject);
    };
  });

  return subjectState;
};
