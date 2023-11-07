import { FC, useEffect, useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { TextBoxTypeEnum } from "../@types/TextBoxTypes";
import ControlWrapper from "./ControlWrapper";
import { FormType } from "../@types/FormTypes";
import { getControl } from "../utils/getControl";

type TextBoxPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const TextBox: FC<TextBoxPropsType> = ({ form, formState, index }) => {
  const [inputType, setInputType] = useState("text");
  const control = getControl(form?.controls || [], index);
  useEffect(() => {
    switch (control?.textbox_info?.type) {
      case TextBoxTypeEnum.Email:
        setInputType("email");
        break;
      case TextBoxTypeEnum.Latin:
        // setInputType("email");
        break;
      case TextBoxTypeEnum.Mobile:
        // setInputType("email");
        break;
      case TextBoxTypeEnum.Number:
        setInputType("number");
        break;
      case TextBoxTypeEnum.Text:
        setInputType("text");
        break;
      case TextBoxTypeEnum.Url:
        setInputType("url");
        break;
      default:
        break;
    }
  }, [control?.textbox_info?.type]);

  if (control?.control_id && formState) {
    const { register } = formState;

    return (
      <ControlWrapper form={form} formState={formState} index={index}>
        <input type={inputType} {...register(control.control_id)} />
      </ControlWrapper>
    );
  }
  return <></>;
};

export default TextBox;
