import { FC, Fragment, memo } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { shuffle } from "../../../utils/shuffle";
import { useFBRegisterControl } from "../../../hooks/useFBRegisterControl";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import {
  ArrangeTypeEnum,
  MultipleOptionTypeEnum,
} from "../../../@types/MultipleOptionTypes";
import groupStyle from "../../../utils/theme/groupStyle";
import { ThemeType } from "../../../@types/ThemeTypes";

type MultiSelectPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const MultiSelect: FC<MultiSelectPropsType> = ({ control, theme }) => {
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);

  const info = control.multiple_option_info;
  if (!info) {
    return <></>;
  }
  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  return (
    <FormGroup
      sx={{
        flexDirection:
          info.arrange_type === ArrangeTypeEnum.Horizontal ? "row" : "column",
        ...groupStyle(theme.groups_style),
      }}
    >
      {options?.map((option) => (
        <Fragment key={option.value}>
          {info.type === MultipleOptionTypeEnum.Image ? (
            <FormControlLabel
              control={
                <Checkbox
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  value={option.value}
                  defaultChecked={defaultValue?.includes(option.value)}
                />
              }
              label={<img alt={option.text} src={option.image_url} />}
            />
          ) : (
            <FormControlLabel
              control={
                <Checkbox
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  value={option.value}
                  defaultChecked={defaultValue?.includes(option.value)}
                />
              }
              label={option.text}
            />
          )}
        </Fragment>
      ))}
    </FormGroup>
  );
};

export default memo(MultiSelect);
