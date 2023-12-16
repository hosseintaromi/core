import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export type PageIndexesType = number[];

export type FormPageViewDataType = {
  indexes?: PageIndexesType;
  submitHandler?: UseFormHandleSubmit<FieldValues, undefined>;
  getFormValues?: () => {
    [controlId: string]: string;
  };
};
