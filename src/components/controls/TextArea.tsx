import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";

type TextAreaPropsType = {
  control: ControlType;
};

const TextArea: FC<TextAreaPropsType> = ({ control }) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);

  return (
    <div>
      <textarea
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        rows={control.textarea_info?.line_count}
      />
    </div>
  );
};

export default TextArea;
