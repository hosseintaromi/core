import { FC, ReactNode } from "react";
import { openView } from "../core/utils/viewManager";
import { ViewContainerType } from "../core/@types/commonView";
import { FormType } from "../@types/FormTypes";
import { getControl, getNextIndex } from "../utils/getControl";
import { useFBControl } from "../hooks/useFBControl";
import { ControlType } from "../@types/ControlTypes";
import FormPage from "./form-builder/FormPage";

type PageWrapperPropsType = {
  form: FormType;
  control: ControlType;
  index: number[];
  children: ReactNode | Element;
};

const PageWrapper: FC<PageWrapperPropsType> = ({
  form,
  control,
  index: _index,
  children,
}) => {
  const { handleSubmit } = useFBControl(control);

  const gotoNext = () => {
    if (!control.control_id) {
      return;
    }
    //closeView(control.control_id, ViewContainerType.MasterTab);
    const nextIndex = getNextIndex(form, _index);
    if (!nextIndex || !nextIndex.length) {
      return;
    }
    openView({
      id: getControl(form.controls || [], nextIndex || [])?.control_id,
      type: ViewContainerType.MasterTab,
      data: {
        form: form,
        index: nextIndex,
      },
      component: FormPage,
    });
  };

  return (
    <div>
      <>{children}</>
      <button onClick={handleSubmit(gotoNext)}>next</button>
    </div>
  );
};

export default PageWrapper;
