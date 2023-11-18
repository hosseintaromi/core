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
    switch (item.type) {
      case ValidationTypeEnum.Regex:
        validationObj.pattern = {
          value: regex,
          message: globalLocales.VALIDATION_REGEX,
        };
        break;
      case ValidationTypeEnum.Email:
        validationObj.pattern = {
          value: regex,
          message: globalLocales.VALIDATION_EMAIL,
        };
        break;
      case ValidationTypeEnum.Length:
        validationObj.pattern = {
          value: regex,
          message: globalLocales.VALIDATION_LENGTH,
        };
        break;
      case ValidationTypeEnum.Number:
        validationObj.pattern = {
          value: regex,
          message: globalLocales.VALIDATION_NUMBER,
        };
        break;
      case ValidationTypeEnum.Range:
        validationObj.pattern = {
          value: regex,
          message: globalLocales.VALIDATION_RANGE,
        };
        break;
      case ValidationTypeEnum.Url:
        validationObj.pattern = {
          value: regex,
          message: globalLocales.VALIDATION_URL,
        };
        break;
      case ValidationTypeEnum.Required:
        validationObj.required = globalLocales.VALIDATION_REQUIRED;

        break;
    }
  });
  return validationObj;
};
