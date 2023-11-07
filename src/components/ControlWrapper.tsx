import { FC, ReactNode } from "react";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getControl } from "../utils/getControl";

type ControlWrapperPropsType = {
  form: FormType;
  formState?: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
  children?: ReactNode | Element;
};

const ControlWrapper: FC<ControlWrapperPropsType> = ({
  form,
  formState,
  index,
  children,
}) => {
  const control = getControl(form.controls || [], index);
  const id = control?.control_id;
  const label = control?.label_text;

  if (id) {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <>{children}</>
      </div>
    );
  }
  return <></>;
};

export default ControlWrapper;
