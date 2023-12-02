import React, { FC } from "react";
import { ControlType } from "../../@types/controls/ControlTypes";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";

type DropDownPropsType = { control: ControlType; isFloatingBox?: boolean };

const DropDown: FC<DropDownPropsType> = ({ control, isFloatingBox }) => {
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);

  const options = control.dropdown_info?.options;

  const selectedValues = React.useMemo(
    () => options?.filter((v) => v.value === defaultValue),
    [defaultValue, options],
  );

  return (
    <FormControl>
      {control.dropdown_info?.searchable ? (
        <Autocomplete
          ref={ref}
          defaultValue={selectedValues?.[0]?.text}
          onChange={(event: any, value: any) => {
            onChange({
              target: {
                name: control.control_id,
                value: options?.find((item) => item.text === value)?.value,
              },
            });
          }}
          onBlur={onBlur}
          options={options?.map((option) => option?.text) || []}
          sx={{ minWidth: 100, display: "flex" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={isFloatingBox ? control.label_text : ""}
            />
          )}
        />
      ) : (
        <>
          {isFloatingBox && (
            <InputLabel id={control.control_id}>
              {control.label_text}
            </InputLabel>
          )}
          <Select
            labelId={control.control_id}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            sx={{ minWidth: 100 }}
            label={isFloatingBox ? control.label_text : ""}
            defaultValue={defaultValue || options?.[0].value}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              marginThreshold: 0,
            }}
          >
            {control.dropdown_info?.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.text}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </FormControl>
  );
};

export default DropDown;
