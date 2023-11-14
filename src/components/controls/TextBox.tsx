import { useEffect, useState } from "react";
import { TextBoxTypeEnum } from "../../@types/TextBoxTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { ControlType } from "../../@types/ControlTypes";
import { ThemeType } from "../../@types/ThemeTypes";
import { TextField } from "@mui/material";

const TextBox = ({
  control,
  theme,
}: {
  control: ControlType;
  theme: ThemeType;
}) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextField
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      type={inputType}
    />
  );
};

export default TextBox;
