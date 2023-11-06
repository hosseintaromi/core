import { FC } from "react";
import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import TextBox from "./TextBox";
import DatePicker from "./DatePicker";
import DropDown from "./DropDown";
import FileUpload from "./FileUpload";
import Group from "./Group";
import MultipleOption from "./MultipleOption";
import PlaceHolder from "./PlaceHolder";
import TextArea from "./TextArea";
import { FieldValues, UseFormRegister } from "react-hook-form";

type ControlPropsType = {
  item: ControlType;
  register: UseFormRegister<FieldValues>;
};

const Control: FC<ControlPropsType> = ({ item, register }) => {
  switch (item.type) {
    case ControlTypeEnum.TextBox:
      return TextBox({ item, register });
    case ControlTypeEnum.DatePicker:
      return DatePicker({ item });
    case ControlTypeEnum.DropDown:
      return DropDown({ item });
    case ControlTypeEnum.FileUpload:
      return FileUpload({ item });
    case ControlTypeEnum.Group:
      return Group({ item, register });
    case ControlTypeEnum.MultipleOption:
      return MultipleOption({ item });
    case ControlTypeEnum.PlaceHolder:
      return PlaceHolder({ item });
    case ControlTypeEnum.TextArea:
      return TextArea({ item });
    default:
      return null;
  }
};

export default Control;
