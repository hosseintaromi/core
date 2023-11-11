import { FC, ReactNode } from "react";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType } from "../@types/ControlTypes";

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
      {label && <label htmlFor={id}>{label}</label>}
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
