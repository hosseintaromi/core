import { useView } from "../../hooks/useView";
import { MessageAlert } from "../../@types/commonView";
import React from "react";

export function Alert() {
  const { viewData } = useView<MessageAlert>({});

  return (
    <div>
      <span>{viewData.message}</span>
    </div>
  );
}
