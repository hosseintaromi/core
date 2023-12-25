import { CloseType, ViewEvent, ViewContainerConfig, ViewInfo, ViewType } from "../@types/view";
export declare const useViewManage: (type: string, containerOrder: number, config?: ViewContainerConfig, openConfig?: ViewEvent, closeConfig?: ViewEvent, activateConfig?: ViewEvent, onEnterContainerConfig?: ViewEvent, onLeaveContainerConfig?: ViewEvent) => {
    activeViewId: string;
    viewsInfo: ViewInfo[];
    openView: (newView: ViewType<any>) => Promise<unknown>;
    closeView: (view: ViewType<any>, newActiveView: ViewType<any> | undefined, closeType: CloseType) => Promise<void>;
};
