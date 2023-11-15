import { FC, ReactNode } from "react";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material";

type ControlWrapperPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
  children?: ReactNode | Element;
};

const ControlWrapper: FC<ControlWrapperPropsType> = ({
  control,
  children,
  isFloatingBox,
}) => {
  const { getControlErrors } = useFBControl(control);

  const id = control?.control_id;
  const label = control?.label_text;
  const hasError = !!getControlErrors()?.type;

  const isFloatingDropDown =
    control.type === ControlTypeEnum.DropDown && isFloatingBox;

  return (
    <FormControl error={hasError} sx={{ marginTop: 3 }}>
      {((label &&
        [
          ControlTypeEnum.Group,
          ControlTypeEnum.MultipleOption,
          ControlTypeEnum.PlaceHolder,
          ControlTypeEnum.DropDown,
        ].includes(control.type)) ||
        !isFloatingBox) && (
        <InputLabel
          shrink={isFloatingDropDown ? undefined : true}
          htmlFor={id}
          sx={isFloatingDropDown ? {} : { fontSize: 20 }}
        >
          {label}
        </InputLabel>
      )}
      <Box marginTop={isFloatingDropDown ? 0 : 3}>
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
