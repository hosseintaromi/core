import { ValidationTypeEnum } from "../@types/ValidationTypes";
import { ControlType } from "../@types/ControlTypes";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { convertLocale } from "../hooks/useGlobalLocales";

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
          message: convertLocale({ key: "VALIDATION_REGEX" }).text,
        };
        break;
      case ValidationTypeEnum.Email:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_EMAIL" }).text,
        };
        break;
      case ValidationTypeEnum.Length:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_LENGTH" }).text,
        };
        break;
      case ValidationTypeEnum.Number:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_NUMBER" }).text,
        };
        break;
      case ValidationTypeEnum.Range:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_RANGE" }).text,
        };
        break;
      case ValidationTypeEnum.Url:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_URL" }).text,
        };
        break;
      case ValidationTypeEnum.Required:
        validationObj.required = convertLocale({
          key: "VALIDATION_REQUIRED",
        }).text;

        break;
    }
  });
  return validationObj;
};