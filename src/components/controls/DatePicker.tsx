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
import { useGlobalLocales } from "../../hooks/useGlobalLocales";

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
  const { convertLocale } = useGlobalLocales();
  const { onChange, onBlur, name, ref, defaultValue } =
    useFBRegisterControl(control);
  const { getControlErrors } = useFBControl(control);

  const datePickerTheme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: theme.font_name,
      fontSize: 16,
    },
  });

  return (
    <ThemeProvider theme={datePickerTheme}>
      <LocalizationProvider
        dateAdapter={AdapterDateFnsJalali}
        localeText={{
          okButtonLabel: convertLocale({ key: "CALENDAR_OK_BUTTON" }).text,
          cancelButtonLabel: convertLocale({ key: "CALENDAR_CANCEL_BUTTON" })
            .text,
        }}
      >
        <DateTimePicker
          sx={{
            ...dateTimePickerStyle(theme),
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
              hidden: true,
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
            layout: {
              sx: {
                ".MuiDayCalendar-weekDayLabel": {
                  fontSize: "18px",
                  fontWeight: 500,
                },
                ".MuiPickersDay-root": {
                  fontSize: "16px",
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
