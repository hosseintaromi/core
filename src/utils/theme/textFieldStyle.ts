import { ControlStyleType } from "../../@types/ThemeTypes";

const textFieldStyleOverride = (
  controlStyle?: ControlStyleType,
  answerColor?: string,
) => {
  const border = controlStyle?.border;
  return {
    styleOverrides: {
      root: {
        marginBlock: controlStyle?.margin?.horizontal + "px",
        marginInline: controlStyle?.margin?.vertical + "px",
        backgroundColor: controlStyle?.background_color,
        ".MuiOutlinedInput-input": {
          fontSize: controlStyle?.font_size + "px",
          fontWeight: controlStyle?.font_weight,
          color: controlStyle?.text_color || answerColor,
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderRadius: controlStyle?.radius,
          boxShadow: controlStyle?.shadow,
          paddingInline: controlStyle?.padding?.horizontal + "px",
          paddingBlock: controlStyle?.padding?.vertical + "px",
        },
      },
    },
  };
};

export default textFieldStyleOverride;
