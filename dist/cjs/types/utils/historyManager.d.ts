import { HistoryItem } from "../@types/view";
export declare function listenBack(historyItem: HistoryItem): void;
export declare function unlistenBack(viewId: string): void;
export declare function disableBrowserAction(): void;
export declare function getQueryParam(key: string): any;
export declare function replaceUrlWithoutQueryParam(key: string): void;
