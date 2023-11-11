import { ReactNode, createContext, memo, useRef } from "react";
import { ControlType } from "../@types/ControlTypes";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  SubmitHandler,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";
import { getValidationObject } from "../utils/getYupObject";

export const FBContext = createContext<{
  addControl: (control: ControlType) => void;
  registerControl: (control: ControlType) => any;
  getControlErrors: (
    id: string,
  ) => FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
}>({} as any);

export const FBContextProvider = memo(
  ({ children }: { children: ReactNode }) => {
    const formController = useForm();

    const controllersRef = useRef<{
      [control_id: string]: {
        control: ControlType;
      };
    }>({});

    const addControl = (control: ControlType) => {
      if (control.control_id) {
        controllersRef.current[control.control_id] = {
          control,
        };
      }
    };

    const registerControl = (control: ControlType) =>
      formController.register("control_id_1", getValidationObject(control));

    const handleSubmit = (callback: SubmitHandler<FieldValues>) =>
      formController.handleSubmit(callback);

    const getControlErrors = (id: string) =>
      formController.formState.errors[id];

    return (
      <>
        <FBContext.Provider
          value={{
            addControl,
            registerControl,
            getControlErrors,
            handleSubmit,
          }}
        >
          {children}
        </FBContext.Provider>
      </>
    );
  },
);
