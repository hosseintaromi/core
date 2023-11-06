import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import ControlWrapper from "./ControlWrapper";

type DropDownPropsType = {
  item: ControlType;
};

const DropDown: FC<DropDownPropsType> = ({ item }) => (
  <ControlWrapper id={item.control_id} label={item.label_text}>
    <select name="cars">
      {item.dropdown_info?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </ControlWrapper>
);

export default DropDown;
