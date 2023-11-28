import { FC, memo } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { shuffle } from "../../../utils/shuffle";
import { useFBRegisterControl } from "../../../hooks/useFBRegisterControl";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ArrangeTypeEnum } from "../../../@types/MultipleOptionTypes";
import groupStyle from "../../../utils/theme/groupStyle";
import { ThemeType } from "../../../@types/ThemeTypes";

type UniSelectPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const UniSelect: FC<UniSelectPropsType> = ({ control, theme }) => {
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);

  const info = control.multiple_option_info;

  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  return (
    <RadioGroup
      sx={{
        flexDirection:
          info?.arrange_type === ArrangeTypeEnum.Horizontal ? "row" : "column",
        ...groupStyle(theme.controls_style),
      }}
      defaultValue={defaultValue}
    >
      {options?.map((option) => (
        <FormControlLabel
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.text}
        />
      ))}
    </RadioGroup>
  );
};

export default memo(UniSelect);
