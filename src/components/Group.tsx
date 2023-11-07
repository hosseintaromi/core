import { FC } from "react";
import Control from "./Control";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormType } from "../@types/FormTypes";
import ControlWrapper from "./ControlWrapper";
import { ControlType } from "../@types/ControlTypes";
import { getControl } from "../utils/getControl";

type GroupPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const Group: FC<GroupPropsType> = ({ form, formState, index }) => {
  const control = getControl(form.controls || [], index);
  if (!control) {
    return <></>;
  }
  return (
    <>
      {control.group_info?.controls?.map((item: ControlType, i) => (
        <Control
          key={i}
          form={form}
          formState={formState}
          index={index.concat(i)}
        />
      ))}
    </>
  );
};

export default Group;
