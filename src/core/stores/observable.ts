export type ObservableAction<T> = (action: string, subject: T) => void;

export interface IObservable<T> {
  on: (subscriber: ObservableAction<T>, subject?: T) => void;
  off: (subscriber: ObservableAction<T>, subject?: T) => void;
  emit: (action: string, subject: T) => void;
}

export abstract class Observable<T> implements IObservable<T> {
  protected observables: {
    [id: string]: ObservableAction<T>[];
  } = {};

  readonly defaultId = "subscribers";

  protected abstract getId?(subject: T): string;

  private getForceId = (subject?: T) =>
    this.getId?.(subject || ({} as any)) || this.defaultId;

  on(subscriber: ObservableAction<T>, subject?: T) {
    const id = this.getForceId(subject);
    let observable = this.observables[id];
    if (!observable) {
      observable = this.observables[id] = [];
    }
    observable.push(subscriber);
  }

  off(subscriber: ObservableAction<T>, subject?: T) {
    const id = this.getForceId(subject);
    const observable = this.observables[id];
    observable?.remove((x) => x === subscriber);
    if (observable.length === 0) {
      delete this.observables[id];
    }
  }

  emit(action: string, subject: T) {
    const id = this.getForceId(subject);
    const observable = this.observables[id];
    observable?.forEach((subscriber) => {
      subscriber?.apply(subscriber, [action, subject]);
    });
  }
}

export abstract class ObjectObservable<T> extends Observable<T> {
  public update(subject: T) {
    this.emit("Update", subject);
  }

  public delete(subject: T) {
    this.emit("Delete", subject);
    const id = this.getId?.(subject);
    if (id) {
      delete this.observables[id];
    }
  }
}
