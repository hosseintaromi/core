import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { MenuItem, Select } from "@mui/material";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";

type DropDownPropsType = { control: ControlType; isFloatingBox?: boolean };

const DropDown: FC<DropDownPropsType> = ({ control, isFloatingBox }) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);

  const options = control.dropdown_info?.options;

  return (
    <Select
      labelId={control.control_id}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      sx={{ minWidth: 100 }}
      label={isFloatingBox ? control.label_text : ""}
      // defaultValue={options?.[0].value}
    >
      {control.dropdown_info?.options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.text}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;
