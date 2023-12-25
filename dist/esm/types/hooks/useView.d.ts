import { CloseType, ViewEvents, ViewType } from "../@types/view";
export declare const useView: <T = any>(events?: ViewEvents) => {
    close: (res?: any) => void;
    closeByType: (closeType: CloseType, res?: any) => void;
    openView: (view: Omit<ViewType<T>, "type">) => void;
    viewData: T;
};
