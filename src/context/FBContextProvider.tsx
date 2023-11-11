import { ReactNode, createContext, memo } from "react";
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
import { getValidationObject } from "../utils/getValidationObject";

export const FBContext = createContext<{
  registerControl: (control: ControlType) => any;
  getControlErrors: (
    id: string,
  ) => FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  submitForm: UseFormHandleSubmit<FieldValues, undefined>;
}>({} as any);

export const FBContextProvider = memo(
  ({ children }: { children: ReactNode }) => {
    const formController = useForm();

    const registerControl = (control: ControlType) =>
      formController.register(control.control_id, getValidationObject(control));

    const submitForm = (callback: SubmitHandler<FieldValues>) =>
      formController.handleSubmit(callback);

    const getControlErrors = (id: string) =>
      formController.formState.errors[id];

    return (
      <>
        <FBContext.Provider
          value={{
            registerControl,
            getControlErrors,
            submitForm,
          }}
        >
          {children}
        </FBContext.Provider>
      </>
    );
  },
);
