import { useEffect, useState } from "react";
import { TextBoxTypeEnum } from "../../@types/TextBoxTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { ControlType } from "../../@types/ControlTypes";
import { TextField } from "@mui/material";
import { useFBControl } from "../../hooks/useFBControl";

const TextBox = ({
  control,
  isFloatingBox,
}: {
  control: ControlType;
  isFloatingBox?: boolean;
}) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);
  const { getControlErrors } = useFBControl(control);
  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    switch (control?.textbox_info?.type) {
      case TextBoxTypeEnum.Email:
        setInputType("email");
        break;
      case TextBoxTypeEnum.Latin:
        // setInputType("email");
        break;
      case TextBoxTypeEnum.Mobile:
        setInputType("tel");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextField
      error={!!getControlErrors()?.type}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      type={inputType}
      label={isFloatingBox ? control.label_text : ""}
    />
  );
};

export default TextBox;
