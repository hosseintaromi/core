import { ValidationTypeEnum } from "../@types/ValidationTypes";
import { ControlType } from "../@types/ControlTypes";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { globalLocales } from "./global";

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
        message: globalLocales.VALIDATION_REGEX,
      };
    }
    if (item.type === ValidationTypeEnum.Email) {
      validationObj.pattern = {
        value: regex,
        message: globalLocales.VALIDATION_EMAIL,
      };
    }
    if (item.type === ValidationTypeEnum.Length) {
      validationObj.pattern = {
        value: regex,
        message: globalLocales.VALIDATION_LENGTH,
      };
    }
    if (item.type === ValidationTypeEnum.Number) {
      validationObj.pattern = {
        value: regex,
        message: globalLocales.VALIDATION_NUMBER,
      };
    }
    if (item.type === ValidationTypeEnum.Range) {
      validationObj.pattern = {
        value: regex,
        message: globalLocales.VALIDATION_RANGE,
      };
    }
    if (item.type === ValidationTypeEnum.Url) {
      validationObj.pattern = {
        value: regex,
        message: globalLocales.VALIDATION_URL,
      };
    }
    if (item.type === ValidationTypeEnum.Required) {
      validationObj.required = globalLocales.VALIDATION_REQUIRED;
    }
  });
  return validationObj;
};
