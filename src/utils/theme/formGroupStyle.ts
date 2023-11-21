import { ControlStyleType } from "../../@types/ThemeTypes";

const formGroupStyleOverride = (controlsStyle?: ControlStyleType) =>
  // const border = controlsStyle?.border;
  ({
    marginBlock: controlsStyle?.margin?.horizontal + "px",
    marginInline: controlsStyle?.margin?.vertical + "px",
    fontSize: controlsStyle?.font_size + "px",
    fontWeight: controlsStyle?.font_weight,
    color: controlsStyle?.text_color,
    paddingInline: controlsStyle?.padding?.horizontal + "px",
    paddingBlock: controlsStyle?.padding?.vertical + "px",
  });
export default formGroupStyleOverride;
