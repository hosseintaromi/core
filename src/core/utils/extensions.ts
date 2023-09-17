declare global {
  interface Event {
    contains(container: Node): boolean;
  }

  interface Array<T> {
    last(): T;
    remove(predicate: (value: T) => boolean): T | undefined;
  }
}

Event.prototype.contains = function (container: Node): boolean {
  return containsTargetEl(this.target as Node, container);
};

Array.prototype.last = function <T>(): T {
  const arr: Array<T> = this || [];
  return arr[arr.length - 1];
};

Array.prototype.remove = function <T>(
  predicate: (value: T) => boolean,
): T | undefined {
  const arr: Array<T> = this || [];
  const index = arr.findIndex((x) => predicate(x));
  if (index >= 0) {
    const removedItem = arr[index];
    arr.splice(index, 1);
    return removedItem;
  }
};

export function containsTargetEl(target: Node | null, container: Node) {
  if (!target) {
    return false;
  }
  return target === container || container.contains(target);
}
