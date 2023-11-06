import { useForm } from "react-hook-form";
import data from "../fakeData.json";
import Control from "./Control";
import { ControlType } from "../@types/ControlTypes";
import { getYupObject } from "../utils/getYupObject";
import { FormType } from "../@types/FormTypes";
import { useEffect } from "react";

const FormSample = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  return (
    <>
      {data.controls.map((item) => (
        <Control
          key={item.control_id}
          item={item as ControlType}
          register={register}
        />
      ))}
    </>
  );
};

export default FormSample;
