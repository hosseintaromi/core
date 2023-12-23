import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callback?: () => void, delay?: number) => {
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(
    () => {
      if (callback) {
        timeout(callback, delay);
      }
      return () => {
        clearAll();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const timeout = useCallback(
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
    [],
  );

  const clearAll = () => {
    timeoutRef.current.forEach((timeout) => {
      clearTimeout(timeout);
    });
    timeoutRef.current = [];
  };

  return timeout;
};
