import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type TextAreaPropsType = {
  item: ControlType;
};

const TextArea: FC<TextAreaPropsType> = ({ item }) => (
  <div>
    {item.label_text && (
      <label htmlFor={item.control_id}>{item.label_text}</label>
    )}
    <textarea
      name={item.control_id}
      rows={item.textarea_info?.line_count}
      // maxLength={item.textarea_info?.max_line} // TODO
    />
  </div>
);

export default TextArea;
