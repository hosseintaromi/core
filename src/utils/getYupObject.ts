import { FormType } from "../@types/FormTypes";
import * as Yup from "yup";
import { ValidationTypeEnum } from "../@types/ValidationTypes";
import { ControlType } from "../@types/ControlTypes";
import { FieldValues, RegisterOptions } from "react-hook-form";

export const getYupObject = (data: FormType) => {
  let yupValidation: { [key: string]: any } = {};

  data.controls?.forEach((item) => {
    if (item.control_id && item.validations) {
      item.validations.forEach((validation) => {
        if (
          validation.type === ValidationTypeEnum.Regex &&
          item.control_id &&
          validation.regex_pattern
        ) {
          const regexPattern = validation.regex_pattern.slice(1, -1);
          const regex = new RegExp(regexPattern);
          yupValidation[item.control_id] = Yup.string().matches(regex);
        }
        if (
          validation.type === ValidationTypeEnum.Required &&
          item.control_id
        ) {
          if (yupValidation[item.control_id]) {
            yupValidation[item.control_id] =
              yupValidation[item.control_id].required();
          } else {
            yupValidation[item.control_id] = Yup.string().required();
          }
        }
      });
    }
  });
  console.log(yupValidation);
  return Yup.object(yupValidation);
};

export const getValidationObject = (control: ControlType) => {
  const validationObj: RegisterOptions<FieldValues, string> = {};
  const validation = control.validations;
  validation?.forEach((item) => {
    if (item.type === ValidationTypeEnum.Regex && item.regex_pattern) {
      const regexPattern = item.regex_pattern.slice(1, -1);
      const regex = new RegExp(regexPattern);
      validationObj.pattern = {
        value: regex,
        message: "لطفا به پترن توجه کنید.",
      };
    }
    if (item.type === ValidationTypeEnum.Required) {
      validationObj.required = "پر کردن این فیلد الزامی است.";
    }
  });
  return validationObj;
};
