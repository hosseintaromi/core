import { FC, Fragment } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { shuffle } from "../../utils/shuffle";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { MultipleOptionTypeEnum } from "../../@types/MultipleOptionTypes";
import groupStyle from "../../utils/theme/groupStyle";
import { ThemeType } from "../../@types/ThemeTypes";

type MultipleOptionPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const MultipleOption: FC<MultipleOptionPropsType> = ({ control, theme }) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);

  const info = control.multiple_option_info;

  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  const ControlledCheckBox = ({ value }: { value: any }) => (
    <Checkbox
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
    />
  );

  return (
    <>
      {info?.multi_select ? (
        <FormGroup sx={groupStyle(theme.controls_style)}>
          {options?.map((option) => (
            <Fragment key={option.value}>
              {info.type === MultipleOptionTypeEnum.Image ? (
                <FormControlLabel
                  control={<ControlledCheckBox value={option.value} />}
                  label={<img alt={option.text} src={option.image_url} />}
                />
              ) : (
                <FormControlLabel
                  control={<ControlledCheckBox value={option.value} />}
                  label={option.text}
                />
              )}
            </Fragment>
          ))}
        </FormGroup>
      ) : (
        <RadioGroup sx={groupStyle(theme.controls_style)}>
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
      )}
    </>
  );
};

export default MultipleOption;
