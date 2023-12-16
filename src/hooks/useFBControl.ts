import { useContext } from "react";
import { ControlType } from "../@types/controls/ControlTypes";
import { FBContext } from "../context/FBContextProvider";

export const useFBControl = (control: ControlType) => {
  const { submitForm, getControlErrors, getFormValues } = useContext(FBContext);

  return {
    submitForm,
    getControlErrors: () => getControlErrors(control.control_id),
    getFormValues,
  };
};
