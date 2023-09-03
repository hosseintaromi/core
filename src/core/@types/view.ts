export enum ViewEventType {
  onInit = "onInit",
  onEnter = "onEnter",
  onLeave = "onLeave",
  onClosing = "onClosing",
}

export interface ViewContainerConfig {
  moveBetweenViews?: boolean;
  disableBrowserHistory?: boolean;
  disableFirstTimeAnimate?: boolean;
}

export interface ViewEventArg {
  fromView?: ViewType<any>;
  toView?: ViewType<any>;
  data?: any;
}

export enum ChangeContainerEventType {
  onEnter = "onEnter",
  onLeave = "onLeave",
}

export enum PartialTabContainerType {
  tab1 = "tab1",
  tab2 = "tab2",
  tab3 = "tab3",
}

export interface ViewContainerDataType {
  views: ViewType<any>[];
  containerOrder: number;
  config?: ViewContainerConfig;
  openView: (newView: ViewType<any>) => Promise<any>;
  closeView: (
    view: ViewType<any>,
    newActiveView?: ViewType<any>,
    res?: any,
  ) => Promise<any>;
  activateView?: (view: ViewType<any>) => Promise<any>;
  changeContainer?: (
    fromView: ViewType<any>,
    eventType: ChangeContainerEventType,
  ) => Promise<any>;
}

export interface ViewEvents {
  onEnter?: (e: ViewEventArg) => void;
  onLeave?: (e: ViewEventArg) => void;
  onClosing?: (e: ViewEventArg) => void;
}

export interface ViewContextType {
  listenEvents: (events: ViewEvents) => () => void;
  emitEvent: (type: ViewEventType, e: ViewEventArg) => void;
  getViewData: () => any;
  close?: (res?: any) => void;
}

export interface OpenViewOptions {
  disableBackdrop?: boolean;
  params?: any;
  onClickedBackdrop?: () => void;
}
export interface ViewType<T> {
  type: string;
  id: string;
  data?: T;
  className?: string;
  component: (props?: any) => JSX.Element;
  onClose?: (res?: any) => void;
  onClosed?: (res?: any) => void;
  onOpened?: () => void;
  options?: OpenViewOptions;
}

export interface ViewInfo {
  id: string;
  view: ViewType<any>;
  events?: ViewEvents;
  elRef?: HTMLElement;
  onInit?: (el: HTMLElement) => void;
}

export interface ViewAnimationConfig {
  duration?: number;
  start?: (newView: ViewRef, prevView?: ViewRef) => void;
  end?: (newView: ViewRef, prevView?: ViewRef) => void;
  animate?: (t: number, newView: ViewRef, prevView?: ViewRef) => void;
}

export interface HistoryItem {
  id: string;
  back: () => void;
}

export interface ViewRef {
  view: ViewType<any>;
  ref: HTMLElement;
}
