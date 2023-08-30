import { ViewEvents } from "../@types/page";
import { useContext, useEffect } from "react";
import { ViewContext } from "../context/PageContextProvider";

export const usePage = <T = any>(events?: ViewEvents) => {
  const pageContext = useContext(ViewContext);

  useEffect(() => {
    if (events) {
      const unListener = pageContext.listenEvents(events);
      return () => {
        unListener();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (res?: any) => {
    pageContext.close?.(res);
  };
  return {
    close,
    pageData: pageContext.getViewData() as T,
  };
};
