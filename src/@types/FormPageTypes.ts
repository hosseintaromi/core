import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { FormType } from "./FormTypes";

export type PageIndexesType = number[];

export type FormPageViewDataType = {
  form?: FormType;
  indexes?: PageIndexesType;
  submitHandler?: UseFormHandleSubmit<FieldValues, undefined>;
  getFormValues?: () => {
    [controlId: string]: string;
  };
};
