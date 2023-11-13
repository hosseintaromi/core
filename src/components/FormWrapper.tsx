import { FC, ReactNode } from "react";
import { openView } from "../core/utils/viewManager";
import { ViewContainerType } from "../core/@types/commonView";
import { FormType } from "../@types/FormTypes";
import { getControl, getNextIndex } from "../utils/controlUtils";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType } from "../@types/ControlTypes";
import FormPage from "./FormPage";
import { FieldValues } from "react-hook-form";

type FormWrapperPropsType = {
  form: FormType;
  control: ControlType;
  indexes: number[];
  children: ReactNode | Element;
};

const FormWrapper: FC<FormWrapperPropsType> = ({
  form,
  control,
  indexes,
  children,
}) => {
  const { submitForm } = useFBControl(control);

  let nextIndex = getNextIndex(form, indexes);

  const gotoNext = (data: FieldValues) => {
    if (!control.control_id) {
      return;
    }
    nextIndex = getNextIndex(form, indexes, data);
    //closeView(control.control_id, ViewContainerType.MasterTab);
    if (!nextIndex || !nextIndex.length) {
      return;
    }
    openView({
      id: getControl(form.controls || [], nextIndex || [])?.control_id,
      type: ViewContainerType.MasterTab,
      data: {
        form: form,
        indexes: nextIndex,
      },
      component: FormPage,
    });
  };

  return (
    <div>
      <>{children}</>
      {nextIndex ? (
        <button onClick={submitForm((data) => gotoNext(data))}>next</button>
      ) : (
        <button onClick={submitForm((data) => console.log(data))}>
          finish
        </button>
      )}
    </div>
  );
};

export default FormWrapper;
