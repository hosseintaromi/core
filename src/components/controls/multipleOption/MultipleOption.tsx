import { FC, memo } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { ThemeType } from "../../../@types/ThemeTypes";
import MultiSelect from "./MultiSelect";
import UniSelect from "./UniSelect";

type MultipleOptionPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const MultipleOption: FC<MultipleOptionPropsType> = ({ control, theme }) => {
  const info = control.multiple_option_info;

  return (
    <>
      {info?.multi_select ? (
        <MultiSelect control={control} theme={theme} />
      ) : (
        <UniSelect control={control} theme={theme} />
      )}
    </>
  );
};

export default memo(MultipleOption);
