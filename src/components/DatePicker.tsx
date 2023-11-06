import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import ControlWrapper from "./ControlWrapper";

type DatePickerPropsType = {
  item: ControlType;
};

const DatePicker: FC<DatePickerPropsType> = ({ item }) => (
  <ControlWrapper label={item.label_text} id={item.control_id}>
    <input type="date" />
  </ControlWrapper>
);

export default DatePicker;
