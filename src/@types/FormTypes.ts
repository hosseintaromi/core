import { ControlType } from "./ControlTypes";
import { LayoutType } from "./LayoutTypes";
import { ThemeType } from "./ThemeTypes";

export type FormType = {
  form_id: string;
  controls: ControlType[];
  layout?: LayoutType;
  theme: ThemeType;
  hide_question_number?: boolean;
  has_progress?: boolean;
  values: { [controlId: string]: string };
};
