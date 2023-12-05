import { FC } from "react";
import {
  ControlType,
  ControlTypeEnum,
} from "../../../@types/controls/ControlTypes";
import { Box, Button } from "@mui/material";
import { Localizer } from "../../Localizer";
import { getControlParentById } from "../../../utils/controlUtils";
import { PlaceHolderTypeEnum } from "../../../@types/controls/PlaceHolderTypes";
import { FormType } from "../../../@types/FormTypes";

type SubmitPropsType = {
  control: ControlType;
  form: FormType;
  submitNext: () => Promise<void> | undefined;
};

const Submit: FC<SubmitPropsType> = ({ control, form, submitNext }) => {
  const id = control?.control_id;
  const type = control.type;

  const parentControl = getControlParentById(control, form.controls, id);
  const isParentGroup =
    parentControl?.type === ControlTypeEnum.Group &&
    parentControl.control_id !== id;

  const hasSubmitButton =
    !isParentGroup &&
    (type === ControlTypeEnum.Group ||
      type === ControlTypeEnum.DatePicker ||
      (type === ControlTypeEnum.PlaceHolder &&
        control.placeholder_info?.type === PlaceHolderTypeEnum.Note) ||
      type === ControlTypeEnum.TextArea ||
      type === ControlTypeEnum.TextBox);

  return (
    <>
      {hasSubmitButton && (
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Button onClick={() => submitNext()}>
            <Localizer localeKey="FORM_NEXT_BUTTON" />
          </Button>
        </Box>
      )}
    </>
  );
};

export default Submit;
