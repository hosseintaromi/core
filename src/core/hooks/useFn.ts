import { useCallback } from "react";

// eslint-disable-next-line react-hooks/exhaustive-deps
const useFn = <T extends Function>(callback: T) => useCallback(callback, []);
export default useFn;
