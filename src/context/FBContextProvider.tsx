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
import { getValidationObject } from "../utils/getValidationObject";
import {
  getControlById,
  getControlParentById,
  hideControlsWithConditionON,
  passCondition,
} from "../utils/controlUtils";

export const FBContext = createContext<{
  registerControl: (control: ControlType) => any;
  getControlErrors: (
    id: string,
  ) => FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  submitForm: UseFormHandleSubmit<FieldValues, undefined>;
  registerFormSet: (
    listen: (newControls: ControlType[]) => void,
    id: string,
  ) => void;
}>({} as any);

export const FBContextProvider = memo(
  ({ control, children }: { control: ControlType; children: ReactNode }) => {
    const formSetControlsRef = useRef<ControlType>(control);
    const formSetListenRef = useRef<{
      [control_id: string]: { listen: (newControls: ControlType[]) => void };
    }>({});

    const formController = useForm();

    const registerControl = (control: ControlType) =>
      formController.register(control.control_id, {
        ...getValidationObject(control),
        onChange: (e) => {
          let controls = formSetControlsRef.current.group_info?.controls;
          if (!controls) {
            return;
          }
          const target = e.target;
          const thisControl = getControlById(controls, target.name);
          if (!thisControl?.conditions) {
            return;
          }
          const group = getControlParentById(
            formSetControlsRef.current,
            controls,
            target.name,
          );
          if (!group?.group_info?.controls) {
            return;
          }
          let groupControls = hideControlsWithConditionON(
            group.group_info?.controls,
          );
          const thenControlId = passCondition(
            thisControl?.conditions,
            target.value,
          );
          if (target.value && thenControlId) {
            groupControls.forEach((item) => {
              if (item.control_id === thenControlId) {
                item.is_hidden = false;
              }
            });
          }

          formSetListenRef.current[group.control_id].listen(groupControls);
        },
      });

    const registerFormSet = (
      listen: (newControls: ControlType[]) => void,
      id: string,
    ) => {
      formSetListenRef.current[id] = { listen };
    };

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
            registerFormSet,
          }}
        >
          {children}
        </FBContext.Provider>
      </>
    );
  },
  () => true,
);
