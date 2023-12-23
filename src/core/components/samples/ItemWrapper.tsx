import { useEffect, ReactNode } from "react";

function ItemWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    // debugger;
  }, []);
  return <>{children}</>;
}

export default ItemWrapper;
