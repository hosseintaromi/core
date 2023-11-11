import fakeData from "../fakeData.json";
import { useEffect } from "react";
import { openView } from "../core/utils/viewManager";
import { ViewContainerType } from "../core/@types/commonView";
import FormPage from "./form-builder/FormPage";

const FormSample = () => {
  useEffect(() => {
    console.log(fakeData);
    openView({
      id: fakeData.controls[0].control_id,
      type: ViewContainerType.MasterTab,
      data: {
        form: fakeData,
        index: [0],
      },
      component: FormPage,
    });
  }, []);

  return <></>;
};

export default FormSample;
