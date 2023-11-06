import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type MultipleOptionPropsType = {
  item: ControlType;
};

const MultipleOption: FC<MultipleOptionPropsType> = ({ item }) => (
  <input type="text" />
);

export default MultipleOption;
