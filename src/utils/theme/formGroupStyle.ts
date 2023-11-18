import { ControlStyleType } from "../../@types/ThemeTypes";

const formGroupStyleOverride = (controlsStyle?: ControlStyleType) => {
  const border = controlsStyle?.border;
  return {
    marginBlock: controlsStyle?.margin?.horizontal + "px",
    marginInline: controlsStyle?.margin?.vertical + "px",
    backgroundColor: controlsStyle?.background_color,
    fontSize: controlsStyle?.font_size + "px",
    fontWeight: controlsStyle?.font_weight,
    color: controlsStyle?.text_color,
    borderTop: border?.top,
    borderBottom: border?.bottom,
    borderRight: border?.right,
    borderLeft: border?.left,
    borderRadius: controlsStyle?.radius,
    boxShadow: controlsStyle?.shadow,
    paddingBlock: controlsStyle?.padding?.horizontal + "px",
    paddingInline: controlsStyle?.padding?.vertical + "px",
  };
};

export default formGroupStyleOverride;
