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
      InputLabelProps={{
        sx: { marginTop: 3 },
      }}
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      multiline={true}
      rows={control.textarea_info?.line_count}
      label={isFloatingBox ? control.label_text : ""}
    />
  );
};
export default TextArea;
