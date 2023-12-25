/// <reference types="react" />
import { MessageAlert, MessageConfirm, MessageLoading, MessageToast, ViewContainerType } from "../@types/commonView";
export declare function openToast(messageToast: MessageToast): void;
export declare function openAlert(messageAlert: MessageAlert): Promise<unknown>;
export declare function openConfirm(messageConfirm: MessageConfirm): Promise<boolean>;
export declare function openCustomConfirm<T>(component: (props?: any) => JSX.Element, data: T): Promise<unknown>;
export declare function openLoading(messageLoading: MessageLoading, viewType?: ViewContainerType.Modal | ViewContainerType.BottomSheet): void;
