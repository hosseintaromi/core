import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type DropDownPropsType = {
  item: ControlType;
};

const DropDown: FC<DropDownPropsType> = ({ item }) => <input type="text" />;

export default DropDown;
