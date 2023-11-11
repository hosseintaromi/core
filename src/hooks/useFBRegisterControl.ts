import { ControlType } from "../@types/ControlTypes";
import { useFBContextProvider } from "./useFBContextProvider";

export const useFBRegisterControl = (control: ControlType) => {
  const { registerControl } = useFBContextProvider();

  return registerControl(control);
};
