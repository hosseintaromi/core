import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { useFBControl } from "../../hooks/useFBControl";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

type DatePickerPropsType = {
  control: ControlType;
};

const DatePicker: FC<DatePickerPropsType> = ({ control }) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);
  const { getControlErrors } = useFBControl(control);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <DateTimePicker
        onChange={(value) =>
          onChange({ target: { value, name: control.control_id } })
        }
        ref={ref}
        slotProps={{
          textField: {
            onBlur,
            name,
            error: !!getControlErrors()?.type,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
