import { ValidationTypeEnum } from "../@types/ValidationTypes";
import { ControlType, ControlTypeEnum } from "../@types/controls/ControlTypes";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { convertLocale } from "../hooks/useGlobalLocales";

export const getValidationObject = (control: ControlType) => {
  const validationObj: RegisterOptions<FieldValues, string> = {};
  const validation = control.validations;
  const maxSize = control.file_upload_info?.max_size;
  if (control.type === ControlTypeEnum.FileUpload && maxSize) {
    validationObj.validate = {
      maxSize: (files) => {
        if (files?.[0] && files?.[0]?.size > maxSize * 1000) {
          return convertLocale({ key: "VALIDATION_FILE_SIZE" }).text;
        }
        return true;
      },
    };
  }
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
      case ValidationTypeEnum.Latin:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_LATIN" }).text,
        };
        break;
      case ValidationTypeEnum.Mobile:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_MOBILE" }).text,
        };
        break;
      case ValidationTypeEnum.NationalId:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_NATIONAL_ID" }).text,
        };
        break;
      case ValidationTypeEnum.Persian:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_PERSIAN" }).text,
        };
        break;
      case ValidationTypeEnum.PostalCode:
        validationObj.pattern = {
          value: regex,
          message: convertLocale({ key: "VALIDATION_POSTAL_CODE" }).text,
        };
        break;
      default:
        validationObj.required = convertLocale({
          key: "VALIDATION_REGEX",
        }).text;
        break;
    }
  });
  return validationObj;
};
