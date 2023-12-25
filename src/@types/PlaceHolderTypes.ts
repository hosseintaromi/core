export enum PlaceHolderTypeEnum {
  Start = "Start",
  End = "End",
  Note = "Note",
}

export type PlaceHolderType = {
  description?: string;
  type?: PlaceHolderTypeEnum;
};
