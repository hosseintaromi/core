import { FC, ReactNode } from "react";

type ControlWrapperPropsType = {
  id?: string;
  label?: string;
  children?: ReactNode | Element;
};

const ControlWrapper: FC<ControlWrapperPropsType> = ({
  id,
  label,
  children,
}) => {
  if (id) {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <>{children}</>
      </div>
    );
  }
  return <></>;
};

export default ControlWrapper;
