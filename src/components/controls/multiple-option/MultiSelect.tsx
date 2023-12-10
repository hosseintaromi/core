import { Fragment, memo } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { shuffle } from "../../../utils/shuffle";
import { useFBRegisterControl } from "../../../hooks/useFBRegisterControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import {
  ArrangeTypeEnum,
  MultipleOptionTypeEnum,
} from "../../../@types/MultipleOptionTypes";
import groupStyle from "../../../utils/theme/groupStyle";
import { useTheme } from "@mui/material";

type MultiSelectPropsType = {
  control: ControlType;
};

const MultiSelect = ({ control }: MultiSelectPropsType) => {
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);
  const theme = useTheme();

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
        ...groupStyle(theme.controlsStyles),
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
                  defaultChecked={
                    defaultValue ||
                    info.default_selected_index?.includes(option.value)
                  }
                />
              }
              label={
                <img alt={option.text} src={option.image_url} width="200px" />
              }
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
                  defaultChecked={
                    defaultValue ||
                    info.default_selected_index?.includes(option.value)
                  }
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
