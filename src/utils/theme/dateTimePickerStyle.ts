import { ControlStyleType } from "../../@types/ThemeTypes";

const dateTimePickerStyle = (controlStyle?: ControlStyleType) => {
  const border = controlStyle?.border;
  return {
    marginBlock: controlStyle?.margin?.horizontal + "px",
    marginInline: controlStyle?.margin?.vertical + "px",
    backgroundColor: controlStyle?.background_color,
    fontSize: controlStyle?.font_size + "px",
    fontWeight: controlStyle?.font_weight,
    color: controlStyle?.text_color,
    borderTop: border?.top,
    borderBottom: border?.bottom,
    borderRight: border?.right,
    borderLeft: border?.left,
    borderRadius: controlStyle?.radius,
    boxShadow: controlStyle?.shadow,
    paddingBlock: controlStyle?.padding?.horizontal + "px",
    paddingInline: controlStyle?.padding?.vertical + "px",
  };
};

export default dateTimePickerStyle;
