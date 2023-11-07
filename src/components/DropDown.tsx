import { FC } from "react";
import ControlWrapper from "./ControlWrapper";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { TextOptionType } from "../@types/MultipleOptionTypes";
import { getControl } from "../utils/getControl";

type DropDownPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const DropDown: FC<DropDownPropsType> = ({ form, formState, index }) => (
  <ControlWrapper form={form} formState={formState} index={index}>
    <select name="cars">
      {getControl(form.controls || [], index)?.dropdown_info?.options?.map(
        (option: TextOptionType) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ),
      )}
    </select>
  </ControlWrapper>
);

export default DropDown;
