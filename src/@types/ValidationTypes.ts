export enum ValidationTypeEnum {
  Required = "Required",
  Regex = "Regex",
  Length = "Length",
  Range = "Range",
  Email = "Email",
  Url = "Url",
  Number = "Number",
}

export type ValidationType = {
  type?: ValidationTypeEnum;
  regex_pattern?: string;
};
