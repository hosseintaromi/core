import { useContext } from "react";
import { ControlType } from "../@types/ControlTypes";
import { FBContext } from "../context/FBContextProvider";

export const useFBRegisterControl = (control: ControlType) => {
  const { registerControl } = useContext(FBContext);

  return registerControl(control);
};
