import { ViewEvents } from "../@types/view";
import { useContext, useEffect } from "react";
import { ViewContext } from "../context/ViewContextProvider";

export const useView = <T = any>(events?: ViewEvents) => {
  const viewContext = useContext(ViewContext);

  useEffect(() => {
    if (events) {
      const unListener = viewContext.listenEvents(events);
      return () => {
        unListener();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (res?: any) => {
    viewContext.close?.(res);
  };
  return {
    close,
    viewData: viewContext.getViewData() as T,
  };
};
