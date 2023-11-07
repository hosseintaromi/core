import { FC } from "react";
import ControlWrapper from "./ControlWrapper";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";

type DatePickerPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const DatePicker: FC<DatePickerPropsType> = ({ form, index, formState }) => (
  <ControlWrapper form={form} formState={formState} index={index}>
    <input type="date" />
  </ControlWrapper>
);

export default DatePicker;
