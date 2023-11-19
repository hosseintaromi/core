import { FC, ReactNode, useMemo } from "react";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material";
import { questionCounter } from "../utils/progressUtils";

type ControlWrapperPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
  hideQuestionNumber?: boolean;
  children?: ReactNode | Element;
};

const ControlWrapper: FC<ControlWrapperPropsType> = ({
  control,
  children,
  isFloatingBox,
  hideQuestionNumber,
}) => {
  const { getControlErrors } = useFBControl(control);

  const id = control?.control_id;
  const label = control?.label_text;
  const type = control.type;
  const hasError = !!getControlErrors()?.type;

  const questionNumber = useMemo(() => {
    if (type !== ControlTypeEnum.Group) return questionCounter();
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control]);

  const isFloatingDropDown =
    control.type === ControlTypeEnum.DropDown && isFloatingBox;

  return (
    <Box display="flex" flexDirection="row" marginTop={3}>
      <Box paddingBlockStart={-2} position="relative" top={-8}>
        {questionNumber !== 0 && !hideQuestionNumber && <>{questionNumber}. </>}
      </Box>
      <FormControl error={hasError}>
        {(label &&
          [
            ControlTypeEnum.Group,
            ControlTypeEnum.MultipleOption,
            ControlTypeEnum.PlaceHolder,
            ControlTypeEnum.DropDown,
          ].includes(control.type)) ||
          (!isFloatingBox && (
            <InputLabel
              shrink={isFloatingDropDown ? undefined : true}
              htmlFor={id}
              sx={isFloatingDropDown ? {} : { fontSize: 20 }}
            >
              {label}
            </InputLabel>
          ))}
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
    </Box>
  );
};

export default ControlWrapper;
