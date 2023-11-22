import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { useFBControl } from "../../hooks/useFBControl";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dateTimePickerStyle from "../../utils/theme/dateTimePickerStyle";
import { ThemeType } from "../../@types/ThemeTypes";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

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

  const datePickerTheme = createTheme({
    direction: "rtl",
  });

  return (
    <ThemeProvider theme={datePickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
        <DateTimePicker
          sx={{
            ...dateTimePickerStyle(theme),
            MuiButton: { backgroundColor: "#ffffff" },
            fontSize: "2rem",
          }}
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
            toolbar: {
              sx: {
                ".MuiDateTimePickerToolbar-dateContainer": {
                  ".MuiTypography-h4": { fontSize: "2rem" },
                },
                ".MuiDateTimePickerToolbar-timeDigitsContainer": {
                  "button, span": { fontSize: "2.5rem" },
                },
                ".MuiDateTimePickerToolbar-ampmSelection": {
                  "button, span": { fontSize: "14px" },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DatePicker;
