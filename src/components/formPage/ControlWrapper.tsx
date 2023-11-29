import { FC, ReactNode, useMemo } from "react";
import { useFBControl } from "../../hooks/useFBControl";
import {
  ControlType,
  ControlTypeEnum,
} from "../../@types/controls/ControlTypes";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useFormPage } from "../../hooks/useFormPage";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
});

const QuestionNumberLabel = styled(InputLabel)({
  position: "static",
  maxWidth: "unset",
  display: "inline-block",
  transform: "none",
  pr: 0.75,
});

const LabelText = styled(InputLabel)({
  position: "static",
  display: "inline-block",
  maxWidth: "unset",
  transform: "none",
});

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
  const { getQuestionNumber } = useFormPage({ id: control.control_id });

  const id = control?.control_id;
  const label = control?.label_text;
  const type = control.type;
  const hasError = !!getControlErrors()?.type;

  const questionNumber = useMemo(() => {
    if (type !== ControlTypeEnum.Group) return getQuestionNumber();
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control]);

  const isFloatingDropDown =
    control.type === ControlTypeEnum.DropDown && isFloatingBox;

  const hasQuestionNumber =
    type !== ControlTypeEnum.Group && !hideQuestionNumber && questionNumber;

  const hasLabel =
    (label &&
      [
        ControlTypeEnum.Group,
        ControlTypeEnum.MultipleOption,
        ControlTypeEnum.PlaceHolder,
        ControlTypeEnum.DropDown,
      ].includes(control.type)) ||
    !isFloatingBox;

  return (
    <Container>
      <FormControl error={hasError} sx={{ gap: 1 }}>
        <Box display="flex" alignItems="center">
          {hasQuestionNumber ? (
            <QuestionNumberLabel shrink>{questionNumber}. </QuestionNumberLabel>
          ) : null}
          {hasLabel && (
            <LabelText
              shrink={isFloatingDropDown ? undefined : true}
              htmlFor={id}
            >
              {label}
            </LabelText>
          )}
        </Box>
        <Box display="flex" flexDirection="column">
          {control.description && (
            <Box marginBlock={isFloatingDropDown ? 0 : 1}>
              <Typography variant="body2">{control.description}</Typography>
            </Box>
          )}
          <>{children}</>
        </Box>
        {hasError && (
          <FormHelperText
            sx={{
              margin: 0,
            }}
          >
            {getControlErrors()?.message?.toString()}
          </FormHelperText>
        )}
      </FormControl>
    </Container>
  );
};

export default ControlWrapper;
