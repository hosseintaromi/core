import { FC, ReactNode, useMemo } from "react";
import { useFBControl } from "../../hooks/useFBControl";
import {
  ControlType,
  ControlTypeEnum,
} from "../../@types/controls/ControlTypes";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useFormPage } from "../../hooks/useFormPage";
import { Localizer } from "../Localizer";
import { getControlParentById } from "../../utils/controlUtils";
import { PlaceHolderTypeEnum } from "../../@types/controls/PlaceHolderTypes";
import FileDisplay from "./FileDisplay";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  gap: 16,
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
  const { getQuestionNumber, form, submitNext, gotoPrev } = useFormPage({
    id: control.control_id,
  });

  const id = control?.control_id;
  const label = control?.label_text;
  const type = control.type;
  const hasError = !!getControlErrors()?.type;
  const hasNext = form.has_next;
  const hasPrev = form.has_prev;

  const questionNumber = useMemo(() => {
    if (type !== ControlTypeEnum.Group) return getQuestionNumber();
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control]);

  const isFloatingDropDown =
    control.type === ControlTypeEnum.DropDown && isFloatingBox;

  const hasQuestionNumber =
    type !== ControlTypeEnum.Group && !hideQuestionNumber && questionNumber;

  const parentControl = getControlParentById(control, form.controls, id);
  const isParentGroup =
    parentControl?.type === ControlTypeEnum.Group &&
    parentControl.control_id !== id;

  const hasNextPrevButton =
    control.placeholder_info?.type !== PlaceHolderTypeEnum.End &&
    control.placeholder_info?.type !== PlaceHolderTypeEnum.Start &&
    !isParentGroup;

  return (
    <Container>
      <FormControl error={hasError} sx={{ gap: 1 }}>
        <Box display="flex" alignItems="center">
          {hasQuestionNumber ? (
            <QuestionNumberLabel shrink>{questionNumber}. </QuestionNumberLabel>
          ) : null}
          <LabelText
            shrink={isFloatingDropDown ? undefined : true}
            htmlFor={id}
            id={id}
          >
            {label}
          </LabelText>
        </Box>
        <Box display="flex" flexDirection="column">
          {control.description && (
            <Box marginBlock={isFloatingDropDown ? 0 : 1}>
              <Typography variant="body2">{control.description}</Typography>
            </Box>
          )}
          {control.file_url && (
            <Box marginBlock={2}>
              <FileDisplay fileUrl={control.file_url} />
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
      {hasNextPrevButton ? (
        <Box display="flex" gap={1} justifyContent="flex-end">
          {hasPrev && (
            <Button onClick={() => gotoPrev()}>
              <Localizer localeKey="FORM_PREV_BUTTON" />
            </Button>
          )}
          {hasNext && (
            <Button onClick={() => submitNext()}>
              <Localizer localeKey="FORM_NEXT_BUTTON" />
            </Button>
          )}
        </Box>
      ) : null}
    </Container>
  );
};

export default ControlWrapper;
