import { FC } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { FormHelperText } from "@mui/material";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type ErrorsPropsType = {
  control: ControlType;
  getControlErrors: () =>
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

const Errors: FC<ErrorsPropsType> = ({ control, getControlErrors }) => {
  const hasError = !!getControlErrors()?.type;

  return (
    <>
      {hasError && (
        <FormHelperText
          sx={{
            margin: 0,
          }}
        >
          {getControlErrors()?.message?.toString()}
        </FormHelperText>
      )}
    </>
  );
};

export default Errors;
