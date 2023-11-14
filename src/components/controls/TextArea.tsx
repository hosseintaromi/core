import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { TextField } from "@mui/material";

type TextAreaPropsType = {
  control: ControlType;
};

const TextArea: FC<TextAreaPropsType> = ({ control }) => {
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
    />
  );
};

export default TextArea;
