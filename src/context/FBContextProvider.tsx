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
import { convertLocale } from "../hooks/useGlobalLocales";
import { useFormPage } from "../hooks/useFormPage";
import { PlaceHolderTypeEnum } from "../@types/controls/PlaceHolderTypes";

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
    });

    const onChangedControlValue = (target: any) => {
      let controls = mainControlRef.current.group_info?.controls;
      const thisControl =
        getControlById(controls || [], target.name) || mainControlRef.current;
      const files = target.files;
      if (thisControl) {
        doubleCheckFile(files?.[0], thisControl);
      }

      if (thisControl?.conditions && controls) {
        const thenShowControlId = passCondition(thisControl?.conditions, {
          [target.name]: target.value || files?.[0],
        });
        if (thenShowControlId) {
          const formSet = getControlParentById(
            mainControlRef.current,
            controls,
            target.name,
          );
          if (formSet?.group_info?.controls) {
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
          }
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

    const doubleCheckFile = (file: any, control: ControlType) => {
      const validation = getValidationObject(control).required;
      if (!file && validation) {
        formController.setError(control.control_id, {
          type: "required",
          message: validation as string,
        });
      }
    };

    const submitForm = (callback: SubmitHandler<FieldValues>) =>
      formController.handleSubmit(callback);

    const getControlErrors = (id: string) =>
      formController.formState.errors[id];

    const getDefaultValue = (controlId: string) =>
      controlDefaultValues.current[controlId];

    return (
      <>
        <FBContext.Provider
          value={{
            registerControl,
            getControlErrors,
            submitForm,
            registerFormSet,
            getDefaultValue,
          }}
        >
          {children}
        </FBContext.Provider>
      </>
    );
  },
  () => true,
);
