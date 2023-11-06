import { ControlType } from "./ControlTypes";

enum GroupTypesEnum {
  FieldSet = "FieldSet",
  FormSet = "FormSet",
}

export type GroupType = {
  type?: GroupTypesEnum;
  title?: string;
  description?: string;
  controls?: ControlType[];
};
