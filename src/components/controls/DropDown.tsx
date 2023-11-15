import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { useFBControl } from "../../hooks/useFBControl";

type DropDownPropsType = { control: ControlType };

const DropDown: FC<DropDownPropsType> = ({ control }) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);
  const { getControlErrors } = useFBControl(control);

  return (
    <Select
      labelId={control.control_id}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
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
