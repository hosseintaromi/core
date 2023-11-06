import { FC } from "react";
import { DatePickerType } from "../@types/DatePickerTypes";
import { ControlType } from "../@types/ControlTypes";

type DatePickerPropsType = {
  item: ControlType;
};

const DatePicker: FC<DatePickerPropsType> = ({ item }) => <input type="text" />;

export default DatePicker;
