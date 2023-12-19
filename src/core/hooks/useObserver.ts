import { useEffect, useCallback, useState } from "react";
import { IObservable, ObservableActionType } from "../stores/observable";

export const useObserver = <T>(
  observable: IObservable<T>,
  subject: T,
  remove?: (subject: T) => void,
  update?: (subject: T) => void,
) => {
  const [subjectState, setSubjectState] = useState<T>(subject);

  const subscribe = useCallback(
    (action: ObservableActionType, newSubject: T) => {
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

  return subjectState;
};
