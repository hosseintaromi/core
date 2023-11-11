import { useEffect, useState } from "react";
import { TextBoxTypeEnum } from "../../../@types/TextBoxTypes";
import { useFBRegisterControl } from "../../../hooks/useFBRegisterControl";
import { ControlType } from "../../../@types/ControlTypes";

const TextBox = ({ control }: { control: ControlType }) => {
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
    <input
      ref={ref}
      onChange={onChange} // assign onChange event
      onBlur={onBlur} // assign onBlur event
      name={name} // assign name prop
      type={inputType}
    />
  );
};

export default TextBox;
