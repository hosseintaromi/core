import { ControlType } from "../@types/ControlTypes";
import { useFBContextProvider } from "./useFBContextProvider";

export const useFBControl = (control: ControlType) => {
  const { handleSubmit, getControlErrors } = useFBContextProvider();

  console.log(getControlErrors(control.control_id));
  return {
    handleSubmit: handleSubmit,
    getControlErrors: () => getControlErrors(control.control_id),
  };
};
