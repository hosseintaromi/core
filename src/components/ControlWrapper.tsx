import { FC, ReactNode } from "react";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType } from "../@types/ControlTypes";
import { InputLabel } from "@mui/material";

type ControlWrapperPropsType = {
  control: ControlType;
  children?: ReactNode | Element;
};

const ControlWrapper: FC<ControlWrapperPropsType> = ({ control, children }) => {
  const { getControlErrors } = useFBControl(control);

  const id = control?.control_id;
  const label = control?.label_text;

  return (
    <div>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <>{children}</>
      <>
        {getControlErrors()?.type && (
          <span>{getControlErrors()?.message?.toString()}</span>
        )}
      </>
    </div>
  );
};

export default ControlWrapper;
