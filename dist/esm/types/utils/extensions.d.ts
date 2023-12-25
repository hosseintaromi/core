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
export declare function containsTargetEl(target: Node | null, container: Node): boolean;
export declare function addEventListenerEl(target: HTMLElement | undefined, event: string, listener: (e: Event) => void): void;
export declare function removeEventListenerEl(target: HTMLElement | undefined, event: string, listener: (e: Event) => void): void;
