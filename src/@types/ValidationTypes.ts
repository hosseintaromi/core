export enum ValidationTypeEnum {
  Required = "Required",
  Regex = "Regex",
}

export type ValidationType = {
  type?: ValidationTypeEnum;
  regex_pattern?: string;
};
