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
  hideControlsWithConditionOn,
  passCondition,
} from "../utils/controlUtils";

export const FBContext = createContext<{
  registerControl: (control: ControlType) => any;
  getControlErrors: (
    id: string,
  ) => FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  submitForm: UseFormHandleSubmit<FieldValues, undefined>;
  registerFormSet: (
    listenControlChanges: (newControls: ControlType[]) => void,
    id: string,
  ) => void;
}>({} as any);

export const FBContextProvider = memo(
  ({ control, children }: { control: ControlType; children: ReactNode }) => {
    const mainControlRef = useRef<ControlType>(control);
    const formSetListenRef = useRef<{
      [control_id: string]: {
        listenControlChanges: (newControls: ControlType[]) => void;
      };
    }>({});

    const formController = useForm();

    const onChangedControlValue = (target: any) => {
      let controls = mainControlRef.current.group_info?.controls;
      if (!controls) {
        return;
      }
      const thisControl = getControlById(controls, target.name);
      if (!thisControl?.conditions) {
        return;
      }
      const thenShowControlId = passCondition(thisControl?.conditions, {
        [target.name]: target.value,
      });
      if (!thenShowControlId) {
        return;
      }
      const formSet = getControlParentById(
        mainControlRef.current,
        controls,
        target.name,
      );
      if (!formSet?.group_info?.controls) {
        return;
      }
      let groupControls = hideControlsWithConditionOn(
        formSet.group_info?.controls,
      );

      const thenControl = groupControls.find(
        (item) => item.control_id === thenShowControlId,
      );
      if (thenControl) {
        thenControl.is_hidden = false;
      }

      formSetListenRef.current[formSet.control_id]?.listenControlChanges(
        groupControls,
      );
    };

    const registerControl = (control: ControlType) =>
      formController.register(control.control_id, {
        ...getValidationObject(control),
        onChange: (e) => {
          onChangedControlValue(e.target);
        },
      });

    const registerFormSet = (
      listenControlChanges: (newControls: ControlType[]) => void,
      id: string,
    ) => {
      formSetListenRef.current[id] = { listenControlChanges };
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