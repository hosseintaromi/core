export interface TTT {
  name: string;
}
export interface MyEvents {
  onChange: <TTT>(data?: TTT) => void;
  onReady: <Number>(data?: Number) => void;
}
