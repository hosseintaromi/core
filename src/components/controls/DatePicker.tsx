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

  // if (control?.control_id) {
  //   console.log(getValidationObject(control), getValues(control.control_id));
  //   return (
  //     <ControlWrapper
  //       form={form}
  //       formState={formState}
  //       index={index}
  //       controlFormState={controlFormState}
  //     >
  //       <input
  //         type="date"
  //         {...register(control.control_id, getValidationObject(control))}
  //         {...controlRegister(control.control_id, getValidationObject(control))}
  //       />
  //     </ControlWrapper>
  //   );
  // }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <DateTimePicker label="Date Picker" defaultValue={new Date(2022, 1, 1)} />
    </LocalizationProvider>
  );
};

export default DatePicker;
