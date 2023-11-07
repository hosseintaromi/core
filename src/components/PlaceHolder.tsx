import { FC } from "react";
import ControlWrapper from "./ControlWrapper";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getControl } from "../utils/getControl";

type PlaceHolderPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};
// TODO placeholder type
const PlaceHolder: FC<PlaceHolderPropsType> = ({ form, formState, index }) => {
  const control = getControl(form.controls || [], index);
  if (!control) {
    return <></>;
  }
  return (
    <ControlWrapper form={form} formState={formState} index={index}>
      <div>{control.placeholder_info?.description}</div>
    </ControlWrapper>
  );
};

export default PlaceHolder;
