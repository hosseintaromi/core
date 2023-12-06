import { memo } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { shuffle } from "../../../utils/shuffle";
import { useFBRegisterControl } from "../../../hooks/useFBRegisterControl";
import { FormControlLabel, Radio, RadioGroup, useTheme } from "@mui/material";
import { ArrangeTypeEnum } from "../../../@types/MultipleOptionTypes";
import groupStyle from "../../../utils/theme/groupStyle";

type UniSelectPropsType = {
  control: ControlType;
};

const UniSelect = ({ control }: UniSelectPropsType) => {
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);
  const theme = useTheme();

  const info = control.multiple_option_info;

  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  return (
    <RadioGroup
      sx={{
        flexDirection:
          info?.arrange_type === ArrangeTypeEnum.Horizontal ? "row" : "column",
        ...groupStyle(theme.controlsStyles),
        margin: 0,
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
