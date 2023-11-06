import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type DropDownPropsType = {
  item: ControlType;
};

const DropDown: FC<DropDownPropsType> = ({ item }) => (
  <div>
    {item.label_text && (
      <label htmlFor={item.control_id}>{item.label_text}</label>
    )}
    <select name="cars">
      {item.dropdown_info?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
);

export default DropDown;
