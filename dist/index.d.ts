/// <reference types="react" />
import * as React from 'react';
import React__default, { MutableRefObject, ReactNode } from 'react';

declare enum EventType {
    None = "None",
    Tap = "Tap",
    RightClick = "RightClick",
    DoubleClick = "DoubleClick",
    Hover = "Hover",
    Press = "Press",
    HorizontalSwipe = "HorizontalSwipe",
    VerticalSwipe = "VerticalSwipe"
}
interface EventHandler {
    onTouchStart?: (e: TouchEvent) => void;
    onTouchMove?: (e: TouchEvent) => void;
    onTouchEnd?: (e: TouchEvent) => void;
    onTap?: (e: Event) => void;
    onRightClick?: (e: Event) => void;
    onDoubleClick?: (e: Event) => void;
    onPress?: (e: Event) => void;
    onMouseover?: (e: Event) => void;
    onMouseout?: (e: Event) => void;
}
interface TouchEvent {
    x: number;
    y: number;
    moveX: number;
    moveY: number;
    e: Event;
}
interface Position {
    x: number;
    y: number;
}
declare const useEvent: (elRef: MutableRefObject<HTMLElement | undefined>, eventType: EventType, events: EventHandler) => {
    updateRef: () => void;
};

interface OverlayData<T, U> {
    event: EventType;
    component: (props?: any) => JSX.Element;
    data?: T;
    backdrop?: boolean;
    className?: string;
    position?: "TopLeft" | "TopCenter" | "TopRight" | "BottomLeft" | "BottomCenter" | "BottomRight";
    positionType?: "ByEvent" | "ByElement";
    getTargetElement?: () => HTMLElement;
    onClose?: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
}
interface OverlayConfig<T, U> {
    event: EventType;
    component: (props?: any) => JSX.Element;
    backdrop?: boolean;
    className?: string;
    positionType?: "ByEvent" | "ByElement";
    position?: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight";
    onClose: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
}
declare const useOverlay: <T, U>(overlayData: OverlayData<T, U>) => MutableRefObject<any>;

declare function ContextMenuWrapper<T, U>({ children, contextMenuConfig, data, onSelect, }: {
    children: ReactNode;
    contextMenuConfig: OverlayConfig<T, U>;
    data?: T;
    onSelect?: (res?: U) => void;
}): React__default.JSX.Element;

declare enum ViewEventType {
    onInit = "onInit",
    onEnter = "onEnter",
    onLeave = "onLeave",
    onClosing = "onClosing"
}
interface ViewContainerConfig {
    moveBetweenViews?: boolean;
    disableBrowserHistory?: boolean;
    disableFirstTimeAnimate?: boolean;
}
interface ViewEventArg {
    fromView?: ViewType<any>;
    toView?: ViewType<any>;
    data?: any;
}
declare enum ChangeContainerEventType {
    onEnter = "onEnter",
    onLeave = "onLeave"
}
type CloseType = "Current" | "All" | "AllExceptFirst" | "AllExceptLast";
interface ViewEvents {
    onEnter?: (e: ViewEventArg) => void;
    onLeave?: (e: ViewEventArg) => void;
    onClosing?: (e: ViewEventArg) => void;
}
interface ViewContextType {
    listenEvents: (events: ViewEvents) => () => void;
    emitEvent: (type: ViewEventType, e: ViewEventArg) => void;
    getViewData: () => any;
    close?: <T>(type: CloseType, res?: T) => void;
    openView?: <T = any>(view: Omit<ViewType<T>, "type">) => void;
}
interface ViewConfig {
    disableBackdrop?: boolean;
    disableAnimate?: boolean;
    inBackground?: boolean;
    params?: any;
    onClickedBackdrop?: () => void;
}
interface ViewType<T> {
    type: string;
    id: string;
    data?: T;
    className?: string;
    component: (props?: any) => JSX.Element;
    onClose?: (res?: any) => void;
    onClosed?: (res?: any) => void;
    onOpened?: () => void;
    options?: ViewConfig;
}
interface ViewInfo {
    id: string;
    view: ViewType<any>;
    events?: ViewEvents;
    elRef?: HTMLElement;
    onInit?: (el: HTMLElement) => void;
}
interface ViewEventConfigBase {
    disableAnimate?: boolean;
}
interface ViewEvent<T = ViewEventConfigBase> {
    duration?: number;
    start?: (newView: ViewRef, prevView?: ViewRef, config?: T) => void;
    end?: (newView: ViewRef, prevView?: ViewRef, config?: T) => void;
    animate?: (t: number, newView: ViewRef, prevView?: ViewRef, config?: T) => void;
}
interface HistoryItem {
    id: string;
    back: () => void;
}
interface ViewRef {
    view: ViewType<any>;
    ref: HTMLElement;
}

declare function Scrollable({ children, viewInfo, }: {
    children: ReactNode;
    viewInfo: ViewInfo;
}): React__default.JSX.Element;

declare function ViewComponent({ viewInfo }: {
    viewInfo: ViewInfo;
}): React__default.JSX.Element;

declare function Alert(): React__default.JSX.Element;

declare function Confirm(): React__default.JSX.Element;

declare function LoadingDialog(): React__default.JSX.Element;

interface MenuOptions {
    options: Option[];
}
interface Option {
    label: string;
    value: string;
}

interface MenuConfig {
    options: MenuOption[];
}
interface MenuOption {
    text: string;
    value: string;
}
declare function Overlay(): React__default.JSX.Element;

declare function Toast(): React__default.JSX.Element;

interface OverlayInlineData<T, U> {
    id?: string;
    event: EventType;
    elRef?: MutableRefObject<HTMLElement>;
    data?: T;
    className?: string;
    component: (props?: any) => JSX.Element;
    onClose?: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
    show?: (show: boolean) => void;
}

interface SlideComponent {
    title: string;
    component: (props?: any) => JSX.Element;
    ref?: HTMLElement;
}
interface SlideInlineData<T, U> {
    id?: string;
    event: EventType;
    elRef?: MutableRefObject<HTMLElement>;
    data?: T;
    title?: string;
    className?: string;
    components: SlideComponent[];
    onClose?: (res?: U) => void;
    mapDataTo?: (data?: T) => any;
    show?: (show: boolean) => void;
}

declare const useAnimate: () => {
    requestAnimate: (duration: number, animate: (t: number) => void, completed: () => void, canceled?: () => void) => () => void;
    cancelAnimate: (cancelRequest: () => void) => void;
};

declare const useClickAsync: <T>(asyncRequest: () => Promise<T>, success?: ((res: T) => void) | undefined, failed?: ((error: string) => void) | undefined) => MutableRefObject<any>;

declare const useDisableSelection: () => void;

type ObservableAction<T> = (action: string, subject: T) => void;
interface IObservable<T> {
    on: (subscriber: ObservableAction<T>, subject?: T) => void;
    off: (subscriber: ObservableAction<T>, subject?: T) => void;
    emit: (action: string, subject: T) => void;
}
declare abstract class Observable<T> implements IObservable<T> {
    protected observables: {
        [id: string]: ObservableAction<T>[];
    };
    readonly defaultId = "subscribers";
    protected abstract getId?(subject: T): string;
    private getForceId;
    on(subscriber: ObservableAction<T>, subject?: T): void;
    off(subscriber: ObservableAction<T>, subject?: T): void;
    emit(action: string, subject: T): void;
}
declare abstract class ObjectObservable<T> extends Observable<T> {
    update(subject: T): void;
    delete(subject: T): void;
}

declare const useObserver: <T>(observable: IObservable<T>, subject: T, remove?: ((subject: T) => void) | undefined, update?: ((subject: T) => void) | undefined) => T;

interface OverlayMenuConfig extends Omit<OverlayData<MenuOptions, Option>, "component"> {
}
declare const useOverlayMenu: (menuData: OverlayMenuConfig) => React.MutableRefObject<any>;

declare const useView: <T = any>(events?: ViewEvents) => {
    close: (res?: any) => void;
    closeByType: (closeType: CloseType, res?: any) => void;
    openView: (view: Omit<ViewType<T>, "type">) => void;
    viewData: T;
};

declare const useViewManage: (type: string, containerOrder: number, config?: ViewContainerConfig, openConfig?: ViewEvent, closeConfig?: ViewEvent, activateConfig?: ViewEvent, onEnterContainerConfig?: ViewEvent, onLeaveContainerConfig?: ViewEvent) => {
    activeViewId: string;
    viewsInfo: ViewInfo[];
    openView: (newView: ViewType<any>) => Promise<unknown>;
    closeView: (view: ViewType<any>, newActiveView: ViewType<any> | undefined, closeType: CloseType) => Promise<void>;
};

type GenericEventFn = (data?: any) => void;
type GenericEvents<T extends Record<keyof T, string>> = {
    [eventName in keyof T]?: GenericEventFn;
};
declare const useContextEvents: <Y extends Record<string, string>, T = any>(context: React.Context<T>) => {
    listen: (events?: GenericEvents<Y> | undefined) => void;
    call: GenericEvents<Y>;
};

declare const ViewContext: React__default.Context<ViewContextType>;
declare const ViewContextProvider: React__default.MemoExoticComponent<({ children, viewInfo }: {
    children: ReactNode;
    viewInfo: ViewInfo;
}) => React__default.JSX.Element>;

declare class ChatObservable extends Observable<Chat> {
    getId(chat: Chat): string;
}
declare const chatObservable: ChatObservable;
interface Chat {
    id: string;
    name: string;
}
declare function getChats(): Chat[];
declare function chatUpdate(): void;
interface ChatInput {
    id: string;
}
interface ChatOutput {
    id: string;
    name: string;
}
declare const apiPost: <T, U>(method: string) => (input: T) => Promise<Awaited<U>>;
declare const getChatsApi: (input: ChatInput) => Promise<ChatOutput>;

interface Message {
    id: string;
    text: string;
}
declare class MessageObservable extends ObjectObservable<Message> {
    getId(message: Message): string;
}
declare function getMessages(): Message[];
declare function messageUpdate(): void;
declare const msgObservable: MessageObservable;

declare function requestAnimation(speed: number, animate: (t: number) => void, completed: () => void, canceled?: () => void): () => void;
type EasingType = "easeOutSine" | "easeInOut" | "easeInOutQuad";

declare function LinearEasing(x: number): number;
declare function bezier(mX1: number, mY1: number, mX2: number, mY2: number): typeof LinearEasing;

declare enum ViewContainerType {
    MasterTab = "MasterTab",
    Tab = "Tab",
    Modal = "Modal",
    BottomSheet = "BottomSheet",
    Toast = "Toast"
}
interface MessageConfirm {
    message: string;
    title?: string;
}
declare enum MessageType {
    Success = "Success",
    Error = "Error"
}
declare enum MessageLoadingResponseType {
    Close = "Close",
    Confirm = "Confirm"
}
interface MessageAlert {
    message: string;
    title?: string;
    type?: MessageType;
}
interface MessageToast {
    message: string;
    type?: MessageType;
    delay?: number;
}
interface MessageLoadingResponseData {
    type: MessageLoadingResponseType;
    message?: string;
    messageType?: MessageType;
    confirmButtonCaption?: string;
}
interface MessageLoading {
    message: string;
    callback: () => Promise<MessageLoadingResponseData>;
}

declare function openToast(messageToast: MessageToast): void;
declare function openAlert(messageAlert: MessageAlert): Promise<unknown>;
declare function openConfirm(messageConfirm: MessageConfirm): Promise<boolean>;
declare function openCustomConfirm<T>(component: (props?: any) => JSX.Element, data: T): Promise<unknown>;
declare function openLoading(messageLoading: MessageLoading, viewType?: ViewContainerType.Modal | ViewContainerType.BottomSheet): void;

declare global {
    interface Event {
        contains(container: Node): boolean;
    }
    interface Array<T> {
        last(): T;
        safePush(item: T): void;
        remove(predicate: (value: T) => boolean): T | undefined;
        removeAll(predicate: (value: T) => boolean): T | undefined;
    }
}
declare function containsTargetEl(target: Node | null, container: Node): boolean;
declare function addEventListenerEl(target: HTMLElement | undefined, event: string, listener: (e: Event) => void): void;
declare function removeEventListenerEl(target: HTMLElement | undefined, event: string, listener: (e: Event) => void): void;

declare function listenBack(historyItem: HistoryItem): void;
declare function unlistenBack(viewId: string): void;
declare function disableBrowserAction(): void;
declare function getQueryParam(key: string): any;
declare function replaceUrlWithoutQueryParam(key: string): void;

declare const closeTabAnimationConfig: ViewEvent;
declare const openTabAnimationConfig: ViewEvent;
declare const onEnterContainerConfig: ViewEvent;
declare const onLeaveContainerConfig: ViewEvent;
declare const activateTabConfig: ViewEvent;
declare const openTabContainerConfig: ViewEvent;
declare const onEnterTabContainerConfig: ViewEvent;
declare const openPartialTabAnimationConfig: ViewEvent;
declare const activePartialTabAnimationConfig: ViewEvent;
declare const leaveContainerMasterTabAnimationConfig: ViewEvent;
declare const onOpenToastConfig: ViewEvent;
declare const onCloseToastConfig: ViewEvent;

declare function registerContainer(containerName: string, containerOrder: number, config: ViewContainerConfig, openView: (view: ViewType<any>) => Promise<any>, closeView: (view: ViewType<any>, newActiveView: ViewType<any> | undefined, closeType: CloseType) => Promise<any>, activateView?: (view: ViewType<any>) => Promise<any>, changeContainer?: (fromView: ViewType<any>, eventType: ChangeContainerEventType) => Promise<any>): void;
declare function removeContainer(containerName: string): void;
declare function openView<T = any>(view: Omit<ViewType<T>, "id"> & {
    id?: string;
}): Promise<void>;
declare function closeView<T>(viewId: string, containerType: string, closeType?: CloseType, res?: T): Promise<void>;
declare function updateViewsByCloseType(views: any[], type: CloseType, index: number): any[];
declare function getViewsByCloseType(views: any[], type: CloseType, index: number): any;

export { Alert, Chat, ChatInput, ChatOutput, Confirm, ContextMenuWrapper, EasingType, EventHandler, EventType, GenericEvents, IObservable, LoadingDialog, MenuConfig, MenuOption, MenuOptions, Message, ObjectObservable, Observable, ObservableAction, Option, Overlay, OverlayConfig, OverlayData, OverlayInlineData, OverlayMenuConfig, Position, Scrollable, SlideComponent, SlideInlineData, Toast, TouchEvent, ViewComponent, ViewContext, ViewContextProvider, activateTabConfig, activePartialTabAnimationConfig, addEventListenerEl, apiPost, bezier, chatObservable, chatUpdate, closeTabAnimationConfig, closeView, containsTargetEl, disableBrowserAction, getChats, getChatsApi, getMessages, getQueryParam, getViewsByCloseType, leaveContainerMasterTabAnimationConfig, listenBack, messageUpdate, msgObservable, onCloseToastConfig, onEnterContainerConfig, onEnterTabContainerConfig, onLeaveContainerConfig, onOpenToastConfig, openAlert, openConfirm, openCustomConfirm, openLoading, openPartialTabAnimationConfig, openTabAnimationConfig, openTabContainerConfig, openToast, openView, registerContainer, removeContainer, removeEventListenerEl, replaceUrlWithoutQueryParam, requestAnimation, unlistenBack, updateViewsByCloseType, useAnimate, useClickAsync, useContextEvents, useDisableSelection, useEvent, useObserver, useOverlay, useOverlayMenu, useView, useViewManage };
