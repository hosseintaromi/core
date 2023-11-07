import { FC } from "react";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getControl } from "../utils/getControl";

type TextAreaPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const TextArea: FC<TextAreaPropsType> = ({ form, formState, index }) => {
  const control = getControl(form.controls || [], index);
  if (!control) {
    return <></>;
  }
  return (
    <div>
      {control.label_text && (
        <label htmlFor={control.control_id}>{control.label_text}</label>
      )}
      <textarea
        name={control.control_id}
        rows={control.textarea_info?.line_count}
        // maxLength={item.textarea_info?.max_line} // TODO
      />
    </div>
  );
};

export default TextArea;
