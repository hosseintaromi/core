import { ControlStyleType } from "../../@types/ThemeTypes";

const textFieldStyleOverride = (controlStyle?: ControlStyleType) => {
  const border = controlStyle?.border;
  return {
    styleOverrides: {
      root: {
        marginBlock: controlStyle?.margin?.horizontal,
        marginInline: controlStyle?.margin?.vertical,
        backgroundColor: controlStyle?.background_color,
        ".MuiOutlinedInput-input": {
          fontSize: controlStyle?.font_size,
          fontWeight: controlStyle?.font_weight,
          color: controlStyle?.text_color,
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderRadius: controlStyle?.radius,
          boxShadow: controlStyle?.shadow,
          paddingBlock: controlStyle?.padding?.horizontal,
          paddingInline: controlStyle?.padding?.vertical,
        },
      },
    },
  };
};

export default textFieldStyleOverride;
