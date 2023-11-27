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
        "& input:valid:focus + fieldset": {
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderWidth: 2,
        },
        ".MuiOutlinedInput-input": {
          fontSize: controls_style?.font_size || font_size + "px",
          fontWeight: controls_style?.font_weight,
          fontFamily: font_name,
          color: controls_style?.text_color || answer_color,
          zIndex: 1,
        },
        ".MuiOutlinedInput-notchedOutline": {
          backgroundColor: controls_style?.background_color,
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderRadius: controls_style?.radius + "px",
          boxShadow: controls_style?.shadow,
          paddingInline: controls_style?.padding?.horizontal + "px",
          paddingBlock: controls_style?.padding?.vertical + "px",
        },
      },
    },
  };
};

export default textFieldStyleOverride;
