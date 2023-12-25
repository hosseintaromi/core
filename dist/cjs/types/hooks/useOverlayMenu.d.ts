/// <reference types="react" />
import { MenuOptions, Option } from "../components/common-views/Menu";
import { OverlayData } from "./useOverlay";
export interface OverlayMenuConfig extends Omit<OverlayData<MenuOptions, Option>, "component"> {
}
export declare const useOverlayMenu: (menuData: OverlayMenuConfig) => import("react").MutableRefObject<any>;
