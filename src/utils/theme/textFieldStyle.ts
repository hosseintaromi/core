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
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderTop: border?.top,
            borderBottom: border?.bottom,
            borderRight: border?.right,
            borderLeft: border?.left,
            borderWidth: 2,
          },
        },
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
        },
      },
    },
  };
};

export default textFieldStyleOverride;
