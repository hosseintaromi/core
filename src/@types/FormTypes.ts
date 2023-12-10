import { ControlType } from "./controls/ControlTypes";
import { LayoutType } from "./LayoutTypes";
import { ThemeType } from "./ThemeTypes";

export enum ProgressDisplayModeEnum {
  None = "None",
  PageNumber = "PageNumber",
  Percent = "Percent",
}

export type FormType = {
  form_id: string;
  title?: string;
  controls: ControlType[];
  layout?: LayoutType;
  theme: ThemeType;
  hide_question_number?: boolean;
  has_progress?: boolean;
  values: { [controlId: string]: string };
  has_next?: boolean;
  has_prev?: boolean;
  progress_display_mode?: ProgressDisplayModeEnum;
};
