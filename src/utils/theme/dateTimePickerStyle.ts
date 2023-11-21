import { ControlStyleType } from "../../@types/ThemeTypes";

const dateTimePickerStyle = (controlStyle?: ControlStyleType) => {
  const border = controlStyle?.border;
  return {
    marginBlock: controlStyle?.margin?.horizontal + "px",
    marginInline: controlStyle?.margin?.vertical + "px",
    ".MuiOutlinedInput-input": {
      fontSize: controlStyle?.font_size + "px",
      fontWeight: controlStyle?.font_weight,
      color: controlStyle?.text_color,
    },
    ".MuiOutlinedInput-notchedOutline": {
      backgroundColor: controlStyle?.background_color,
      borderTop: border?.top,
      borderBottom: border?.bottom,
      borderRight: border?.right,
      borderLeft: border?.left,
      borderRadius: controlStyle?.radius,
      boxShadow: controlStyle?.shadow,
      paddingInline: controlStyle?.padding?.horizontal + "px",
      paddingBlock: controlStyle?.padding?.vertical + "px",
    },
  };
};

export default dateTimePickerStyle;
