import { FC, ReactNode } from "react";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType } from "../@types/ControlTypes";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";

type ControlWrapperPropsType = {
  control: ControlType;
  children?: ReactNode | Element;
};

const ControlWrapper: FC<ControlWrapperPropsType> = ({ control, children }) => {
  const { getControlErrors } = useFBControl(control);

  const id = control?.control_id;
  const label = control?.label_text;
  const hasError = !!getControlErrors()?.type;

  return (
    <FormControl error={hasError} variant="standard">
      {label && (
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <>{children}</>
      <>
        {hasError && (
          <FormHelperText>
            {getControlErrors()?.message?.toString()}
          </FormHelperText>
        )}
      </>
    </FormControl>
  );
};

export default ControlWrapper;
