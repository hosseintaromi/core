import { ThemeType } from "../../@types/ThemeTypes";

const textFieldStyleOverride = ({
  controls_style,
  answer_color,
  font_size,
  font_name,
}: ThemeType) => {
  const border = controls_style?.border;
  return {
    styleOverrides: {
      root: {
        marginBlock: controls_style?.margin?.horizontal + "px",
        marginInline: controls_style?.margin?.vertical + "px",
        ".MuiOutlinedInput-input": {
          fontSize: controls_style?.font_size || font_size + "px",
          fontWeight: controls_style?.font_weight,
          fontFamily: font_name,
          color: controls_style?.text_color || answer_color,
        },
        ".MuiOutlinedInput-notchedOutline": {
          backgroundColor: controls_style?.background_color,
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderRadius: controls_style?.radius,
          boxShadow: controls_style?.shadow,
          paddingInline: controls_style?.padding?.horizontal + "px",
          paddingBlock: controls_style?.padding?.vertical + "px",
        },
      },
    },
  };
};

export default textFieldStyleOverride;
