import { useEffect, useRef, useState } from "react";
import { useView } from "../../hooks/useView";
import {
  MessageLoadingResponseData,
  MessageLoadingViewModel,
  MessageLoadingResponseType,
} from "../../@types/commonView";
import useInit from "../../hooks/useInit";
import React from "react";

export function LoadingDialog() {
  const [loadingEnd, setLoadingEnd] = useState<
    MessageLoadingResponseData | undefined
  >();

  const loaded = useRef<boolean>(false);
  const { viewData, close } = useView<MessageLoadingViewModel>({});

  const callLoading = async () => {
    try {
      const loadingEndRes = await viewData.callback();
      if (loadingEndRes.type === MessageLoadingResponseType.Close) {
        close();
      } else {
        setLoadingEnd(loadingEndRes);
      }
    } catch {
      close();
    }
  };

  useInit(() => {
    callLoading();
    viewData.onClickedBackdrop = () => {
      if (loaded.current) {
        close();
      }
    };
    return () => {};
  });

  useEffect(() => {
    loaded.current = !!loadingEnd;
  }, [loadingEnd]);

  return (
    <div>
      {loadingEnd ? (
        <>
          <span>{loadingEnd.message}</span>
          {loadingEnd.type === MessageLoadingResponseType.Confirm && (
            <button
              className="btn btn-primary w-100"
              onClick={() => close({ res: true })}
            >
              {loadingEnd.confirmButtonCaption}
            </button>
          )}
        </>
      ) : (
        <>
          <span>{viewData.message}</span>
          <span>loading...</span>
        </>
      )}
    </div>
  );
}
