import { EffectCallback, useEffect } from "react";

const useInit = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};
export default useInit;
