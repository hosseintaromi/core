import { FC, useEffect, useState } from "react";
import { ControlType } from "../@types/ControlTypes";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { TextBoxTypeEnum } from "../@types/TextBoxTypes";

type TextBoxPropsType = {
  item: ControlType;
  register: UseFormRegister<FieldValues>;
};

const TextBox: FC<TextBoxPropsType> = ({ item, register }) => {
  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    switch (item.textbox_info?.type) {
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
  }, [item.textbox_info?.type]);

  if (item.control_id) {
    return (
      <div>
        {item.label_text && (
          <label htmlFor={item.control_id}>{item.label_text}</label>
        )}
        <input type={inputType} {...register(item.control_id)} />
      </div>
    );
  }
  return <></>;
};

export default TextBox;
