export type ObservableAction<T> = (action: string, subject: T) => void;
export interface IObservable<T> {
    on: (subscriber: ObservableAction<T>, subject?: T) => void;
    off: (subscriber: ObservableAction<T>, subject?: T) => void;
    emit: (action: string, subject: T) => void;
}
export declare abstract class Observable<T> implements IObservable<T> {
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
export declare abstract class ObjectObservable<T> extends Observable<T> {
    update(subject: T): void;
    delete(subject: T): void;
}
