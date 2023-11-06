import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type TextAreaPropsType = {
  item: ControlType;
};

const TextArea: FC<TextAreaPropsType> = ({ item }) => (
  <textarea
    rows={item.textarea_info?.line_count}
    // maxLength={item.textarea_info?.max_line} // TODO
  />
);

export default TextArea;
