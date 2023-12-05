import { FC, useMemo } from "react";
import {
  ControlType,
  ControlTypeEnum,
} from "../../../@types/controls/ControlTypes";
import { Box, InputLabel, styled } from "@mui/material";
import { ValidationTypeEnum } from "../../../@types/ValidationTypes";

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

const Required = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
}));

type LabelPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
  hideQuestionNumber?: boolean;
  getQuestionNumber: () => number | "" | undefined;
};

const Label: FC<LabelPropsType> = ({
  control,
  getQuestionNumber,
  isFloatingBox,
  hideQuestionNumber,
}) => {
  const id = control?.control_id;
  const label = control?.label_text;
  const type = control.type;

  const questionNumber = useMemo(() => {
    if (type !== ControlTypeEnum.Group) return getQuestionNumber();
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control]);

  const isFloatingDropDown =
    control.type === ControlTypeEnum.DropDown && isFloatingBox;

  const hasQuestionNumber =
    type !== ControlTypeEnum.Group && !hideQuestionNumber && questionNumber;

  const isRequired = control.validations?.find(
    (item) => item.type === ValidationTypeEnum.Required,
  );

  return (
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
        {isRequired ? <Required>*</Required> : null}
      </LabelText>
    </Box>
  );
};

export default Label;
