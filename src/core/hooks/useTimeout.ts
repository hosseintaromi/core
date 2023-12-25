import { useRef } from "react";
import useInit from "./useInit";
import useFn from "./useFn";

export const useTimeout = (callback?: () => void, delay?: number) => {
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

  useInit(() => {
    if (callback) {
      timeout(callback, delay);
    }
    return () => {
      clearAll();
    };
  });

  const timeout = useFn(
    (callback: () => void, delay?: number, reset?: boolean) => {
      if (reset) {
        clearAll();
      }
      const timeouts = timeoutRef.current;
      const newTimeout = setTimeout(callback, delay || 0);
      timeouts.push(newTimeout);
      return () => {
        clearTimeout(newTimeout);
        timeouts.remove((x) => x === newTimeout);
      };
    },
  );

  const clearAll = () => {
    timeoutRef.current.forEach((timeout) => {
      clearTimeout(timeout);
    });
    timeoutRef.current = [];
  };

  return timeout;
};
