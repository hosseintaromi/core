import { FormType } from "../@types/FormTypes";
import { useView } from "../core/hooks/useView";
import { getControl } from "../utils/controlUtils";
import ControlSelector from "./ControlSelector";
import ControlWrapper from "./ControlWrapper";
import { FBContextProvider } from "../context/FBContextProvider";
import { useFBControl } from "../hooks/useFBControl";
import { useEffect } from "react";
import { ControlType } from "../@types/ControlTypes";
import { FormPageViewDataType } from "../@types/FormPageTypes";

const NavigationHandler = ({ control }: { control: ControlType }) => {
  const { submitForm } = useFBControl(control);
  const { viewData } = useView<FormPageViewDataType>();

  useEffect(() => {
    viewData.submitHandler = submitForm;
  }, []);
  return <></>;
};

const FormPageItem = () => {
  const { viewData } = useView<FormPageViewDataType>();
  const { form, indexes } = viewData;
  const control = getControl(form?.controls || [], indexes || []);
  if (!form || !indexes || indexes.length < 1 || !control) {
    return <></>;
  }
  return (
    <FBContextProvider control={control} defaultValues={form.values}>
      <NavigationHandler control={control} />
      <ControlWrapper
        control={control}
        isFloatingBox={form.layout?.floating_box}
        hideQuestionNumber={form.hide_question_number}
      >
        <ControlSelector
          control={control}
          isFloatingBox={form.layout?.floating_box}
          theme={form.theme}
          hideQuestionNumber={form.hide_question_number}
        />
      </ControlWrapper>
    </FBContextProvider>
  );
};

export default FormPageItem;
