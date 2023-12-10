import { ControlType } from "../../@types/controls/ControlTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import TextField from "@mui/material/TextField";

type TextAreaPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
};

const TextArea = ({ control, isFloatingBox }: TextAreaPropsType) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);

  return (
    <TextField
      sx={{
        "label + &": {
          marginTop: 3,
        },
      }}
      multiline
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      rows={control.textarea_info?.line_count}
      label={isFloatingBox ? control.label_text : ""}
    />
  );
};

export default TextArea;
