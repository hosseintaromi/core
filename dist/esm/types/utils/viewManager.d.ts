import { ChangeContainerEventType, CloseType, ViewContainerConfig, ViewType } from "../@types/view";
export declare function registerContainer(containerName: string, containerOrder: number, config: ViewContainerConfig, openView: (view: ViewType<any>) => Promise<any>, closeView: (view: ViewType<any>, newActiveView: ViewType<any> | undefined, closeType: CloseType) => Promise<any>, activateView?: (view: ViewType<any>) => Promise<any>, changeContainer?: (fromView: ViewType<any>, eventType: ChangeContainerEventType) => Promise<any>): void;
export declare function removeContainer(containerName: string): void;
export declare function openView<T = any>(view: Omit<ViewType<T>, "id"> & {
    id?: string;
}): Promise<void>;
export declare function closeView<T>(viewId: string, containerType: string, closeType?: CloseType, res?: T): Promise<void>;
export declare function updateViewsByCloseType(views: any[], type: CloseType, index: number): any[];
export declare function getViewsByCloseType(views: any[], type: CloseType, index: number): any;
