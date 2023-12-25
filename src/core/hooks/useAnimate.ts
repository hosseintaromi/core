import { useRef } from "react";
import { requestAnimation } from "../utils/animator";
import useInit from "./useInit";
import useFn from "./useFn";

export const useAnimate = () => {
  const cancelRef = useRef<(() => void)[]>([]);

  const removeCancelRequest = useFn((request: () => void) => {
    cancelRef.current.remove((x) => x === request);
  });

  const requestAnimate = useFn(
    (
      duration: number,
      animate: (t: number) => void,
      completed: () => void,
      canceled?: () => void,
    ) => {
      const request = requestAnimation(
        duration,
        (t: number) => {
          animate(t);
        },
        () => {
          removeCancelRequest(request);
          completed();
        },
        () => {
          removeCancelRequest(request);
          canceled?.();
        },
      );
      cancelRef.current.push(request);
      return request;
    },
  );

  const cancelAnimate = useFn((cancelRequest: () => void) => {
    removeCancelRequest(cancelRequest);
    cancelRequest();
  });

  useInit(() => () => {
    cancelRef.current.forEach((cancelRequest) => {
      cancelRequest();
    });
    cancelRef.current = [];
  });

  return {
    requestAnimate,
    cancelAnimate,
  };
};
