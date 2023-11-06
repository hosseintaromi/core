import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type DatePickerPropsType = {
  item: ControlType;
};

const DatePicker: FC<DatePickerPropsType> = ({ item }) => <input type="date" />;

export default DatePicker;
