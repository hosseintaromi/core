import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type TextAreaPropsType = {
  item: ControlType;
};

const TextArea: FC<TextAreaPropsType> = ({ item }) => <input type="text" />;

export default TextArea;
