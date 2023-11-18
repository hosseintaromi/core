import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { useFBControl } from "../../hooks/useFBControl";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dateTimePickerStyle from "../../utils/theme/dateTimePickerStyle";
import { ThemeType } from "../../@types/ThemeTypes";

type DatePickerPropsType = {
  control: ControlType;
  theme: ThemeType;
  isFloatingBox?: boolean;
};

const DatePicker: FC<DatePickerPropsType> = ({
  control,
  isFloatingBox,
  theme,
}) => {
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);
  const { getControlErrors } = useFBControl(control);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <DateTimePicker
        defaultValue={defaultValue}
        onChange={(value) =>
          onChange({ target: { value, name: control.control_id } })
        }
        ref={ref}
        slotProps={{
          textField: {
            label: isFloatingBox ? control.label_text : "",
            onBlur,
            name,
            error: !!getControlErrors()?.type,
          },
        }}
        sx={dateTimePickerStyle(theme.controls_style)}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
