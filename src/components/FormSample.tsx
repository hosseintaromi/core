import { useForm } from "react-hook-form";
import fakeData from "../fakeData.json";
import Control from "./Control";
import { ControlType } from "../@types/ControlTypes";
import { getYupObject } from "../utils/getYupObject";
import { FormType } from "../@types/FormTypes";
import { useEffect } from "react";
import { openView } from "../core/utils/viewManager";
import { ViewContainerType } from "../core/@types/commonView";

const FormSample = () => {
  const formState = useForm();

  // useEffect(() => {
  //   const yup = getYupObject(data as FormType);
  //   yup
  //     .validate({ control_id_1: "ddddd" })
  //     .then((res) => console.log("ddddd", res));
  //   yup
  //     .validate({ control_id_1: "یمنلتیسلمتس" })
  //     .then((res) => console.log("یمنلتیسلمتس", res));
  //   yup.validate({ control_id_1: "" }).then((res) => console.log("", res));
  // }, []);

  useEffect(() => {
    openView({
      id: fakeData.controls[0].control_id,
      type: ViewContainerType.MasterTab,
      data: {
        form: fakeData,
        formState: formState,
        index: [0],
      },
      component: Control,
    });
  }, [formState]);

  return <></>;
};

export default FormSample;
