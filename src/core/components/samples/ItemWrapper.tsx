import { ReactNode } from "react";
import useInit from "../../hooks/useInit";

function ItemWrapper({ children }: { children: ReactNode }) {
  useInit(() => {
    // debugger;
  });
  return <>{children}</>;
}

export default ItemWrapper;
