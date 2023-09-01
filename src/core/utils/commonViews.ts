import { ViewContainerType } from "../@types/view";
import { openView } from "./viewManager";
import {
  MessageAlert,
  MessageConfirm,
  MessageLoading,
  MessageLoadingViewModel,
  MessageToast,
} from "../@types/commonView";
import { Alert } from "../components/Alert";
import { Confirm } from "../components/Confirm";
import { Toast } from "../components/Toast";
import { LoadingDialog } from "../components/LoadingDialog";

export function openToast(messageToast: MessageToast) {
  openView<MessageToast>({
    type: ViewContainerType.Toast,
    id: "toast-" + Date.now(),
    data: messageToast,
    component: Toast,
    className: "toast-message",
  });
}

export async function openAlert(messageAlert: MessageAlert) {
  return new Promise((resolve) => {
    openView<MessageAlert>({
      type: ViewContainerType.Tab,
      id: "alert-" + Date.now(),
      component: Alert,
      data: messageAlert,
      onClose: () => {
        resolve(true);
      },
    });
  });
}

export async function openConfirm(messageConfirm: MessageConfirm) {
  try {
    const ok = await openCustomConfirm<MessageConfirm>(Confirm, messageConfirm);
    if (!ok) {
      throw Error("CANCEL");
    }
    return true;
  } catch (error) {
    throw error;
  }
}

export async function openCustomConfirm<T>(
  component: (props?: any) => JSX.Element,
  data: T,
) {
  return new Promise((resolve, reject) => {
    openView<T>({
      type: ViewContainerType.Modal,
      id: "confirm-" + Date.now(),
      component: component,
      data,
      onClose: (res: any) => {
        if (res) {
          resolve(res);
        } else {
          reject(false);
        }
      },
    });
  });
}

export function openLoading(
  messageLoading: MessageLoading,
  viewType?: ViewContainerType.Modal | ViewContainerType.BottomSheet,
) {
  const model = messageLoading as MessageLoadingViewModel;
  openView<MessageLoadingViewModel>({
    type: viewType || ViewContainerType.Modal,
    id: "loading-" + Date.now(),
    data: model,
    component: LoadingDialog,
    className: "loading-message",
    options: {
      disableBackdrop: true,
      onClickedBackdrop: () => {
        model.onClickedBackdrop?.();
      },
    },
  });
}
