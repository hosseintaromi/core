import { ReactNode, createContext, memo, useRef } from "react";
import { ControlType, ControlTypeEnum } from "../@types/controls/ControlTypes";
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
  getDefaultValues,
  hideControlsWithConditionOn,
  passCondition,
} from "../utils/controlUtils";
import { useFormPage } from "../hooks/useFormPage";

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
  getDefaultValue: (controlId: string) => void;
  getFormValues: () => {
    [controlId: string]: string;
  };
}>({} as any);

export const FBContextProvider = memo(
  ({
    control,
    defaultValues,
    children,
  }: {
    control: ControlType;
    defaultValues: { [controlId: string]: string };
    children: ReactNode;
  }) => {
    const mainControlRef = useRef<ControlType>(control);
    const controlDefaultValues = useRef<{ [controlId: string]: string }>(
      getDefaultValues(control, defaultValues),
    );
    const formSetListenRef = useRef<{
      [control_id: string]: {
        listenControlChanges: (newControls: ControlType[]) => void;
      };
    }>({});
    const { submitNext, form } = useFormPage({});

    const formController = useForm({
      defaultValues: controlDefaultValues.current,
      mode: "onBlur",
    });

    const onChangedControlValue = (target: any) => {
      let controls = mainControlRef.current.group_info?.controls;
      const thisControl =
        getControlById(controls || [], target.name) || mainControlRef.current;
      if (thisControl.type === ControlTypeEnum.DatePicker) {
        formController.setValue(target.name, target.value);
      }
      const files = target.files;
      if (thisControl?.conditions && controls) {
        const thenShowControlId = passCondition(thisControl?.conditions, {
          [target.name]: target.value || files?.[0],
        });
        const formSet = getControlParentById(
          mainControlRef.current,
          controls,
          target.name,
        );
        if (formSet?.group_info?.controls) {
          let groupControls = hideControlsWithConditionOn(
            formSet.group_info?.controls,
          );
          if (thenShowControlId) {
            const thenControl = groupControls.find(
              (item) => item.control_id === thenShowControlId,
            );
            if (thenControl) {
              thenControl.is_hidden = false;
            }
          }

          formSetListenRef.current[formSet.control_id]?.listenControlChanges(
            groupControls,
          );
        }
      } else if (target.value !== undefined || target.files?.[0]) {
        const type = mainControlRef.current.type;
        const parent = getControlParentById(
          control,
          form.controls,
          control.control_id,
        );
        const hasSubmitButton =
          parent?.type !== ControlTypeEnum.Group &&
          type !== ControlTypeEnum.DatePicker &&
          type !== ControlTypeEnum.PlaceHolder &&
          type !== ControlTypeEnum.TextArea &&
          type !== ControlTypeEnum.TextBox;

        if (hasSubmitButton) {
          submitNext();
        }
      }
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

    const getDefaultValue = (controlId: string) =>
      controlDefaultValues.current[controlId];

    const getFormValues = () => formController.getValues();

    return (
      <>
        <FBContext.Provider
          value={{
            registerControl,
            getControlErrors,
            submitForm,
            registerFormSet,
            getDefaultValue,
            getFormValues,
          }}
        >
          {children}
        </FBContext.Provider>
      </>
    );
  },
  () => true,
);
