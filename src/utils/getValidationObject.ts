import { ValidationTypeEnum } from "../@types/ValidationTypes";
import { ControlType } from "../@types/ControlTypes";
import { FieldValues, RegisterOptions } from "react-hook-form";

export const getValidationObject = (control: ControlType) => {
  const validationObj: RegisterOptions<FieldValues, string> = {};
  const validation = control.validations;
  validation?.forEach((item) => {
    let regex: RegExp = /^/;
    if (item.regex_pattern) {
      const regexPattern = item.regex_pattern.slice(1, -1);
      regex = new RegExp(regexPattern);
    }
    if (item.type === ValidationTypeEnum.Regex) {
      validationObj.pattern = {
        value: regex,
        message: "لطفا به پترن توجه کنید.",
      };
    }
    if (item.type === ValidationTypeEnum.Email) {
      validationObj.pattern = {
        value: regex,
        message: "لطفا ایمیل خود را به درستی وارد کنید",
      };
    }
    if (item.type === ValidationTypeEnum.Length) {
      validationObj.pattern = {
        value: regex,
        message: "اندازه ورودی از حد مجاز خارج است",
      };
    }
    if (item.type === ValidationTypeEnum.Number) {
      validationObj.pattern = {
        value: regex,
        message: "ورودی باید عدد باشد.",
      };
    }
    if (item.type === ValidationTypeEnum.Range) {
      validationObj.pattern = {
        value: regex,
        message: "ورودی در بازه مورد نظر نمی باشد.",
      };
    }
    if (item.type === ValidationTypeEnum.Url) {
      validationObj.pattern = {
        value: regex,
        message: "ورودی صحیح نمی‌باشد.",
      };
    }
    if (item.type === ValidationTypeEnum.Required) {
      validationObj.required = "پر کردن این فیلد الزامی است.";
    }
  });
  return validationObj;
};
