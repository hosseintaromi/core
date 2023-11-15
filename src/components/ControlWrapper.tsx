import { FC, ReactNode } from "react";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType } from "../@types/ControlTypes";
import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material";

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
    <FormControl error={hasError} sx={{ marginTop: 3 }}>
      {label && (
        <InputLabel shrink htmlFor={id} sx={{ fontSize: 20 }}>
          {label}
        </InputLabel>
      )}
      <Box marginTop={3}>
        <>{children}</>
      </Box>
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
