import { CloseType, ViewEvents, ViewType } from "../@types/view";
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

  const close = (option?: CloseType) => {
    viewContext.close?.(option);
  };

  const openView = (view: Omit<ViewType<T>, "type">) => {
    viewContext.openView?.(view);
  };

  return {
    close,
    openView,
    viewData: viewContext.getViewData() as T,
  };
};
