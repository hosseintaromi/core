import { FC, ReactNode } from "react";
import { closeView, openView } from "../core/utils/viewManager";
import { ViewContainerType } from "../core/@types/commonView";
import Control from "./Control";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getControl, getNextIndex } from "../utils/getControl";

type PageWrapperPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
  children: ReactNode | Element;
};

const PageWrapper: FC<PageWrapperPropsType> = ({
  form,
  formState,
  index: _index,
  children,
}) => {
  const control = getControl(form?.controls || [], _index);
  if (!control) {
    return <></>;
  }
  const handleNext = () => {
    if (!control.control_id) {
      return;
    }
    closeView(control.control_id, ViewContainerType.MasterTab);
    const nextIndex = getNextIndex(form, _index);
    openView({
      id: getControl(form.controls || [], nextIndex || [])?.control_id,
      type: ViewContainerType.MasterTab,
      data: {
        form: form,
        formState: formState,
        index: nextIndex,
      },
      component: Control,
    });
  };
  return (
    <div>
      <>{children}</>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default PageWrapper;
