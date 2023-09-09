declare global {
  interface Event {
    contains(container: Node): boolean;
  }
}

Event.prototype.contains = function (container: Node): boolean {
  return containsTargetEl(this.target as Node, container);
};

export function containsTargetEl(target: Node | null, container: Node) {
  if (!target) {
    return false;
  }
  return target === container || container.contains(target);
}
