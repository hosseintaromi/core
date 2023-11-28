import { ThemeType } from "../../@types/ThemeTypes";

const selectStyleOverride = ({
  controls_style,
  font_size,
  font_name,
}: ThemeType) => {
  const border = controls_style?.border;
  return {
    styleOverrides: {
      root: {
        ".MuiOutlinedInput-input": {
          fontSize: controls_style?.font_size || font_size + "px",
          fontWeight: controls_style?.font_weight,
          fontFamily: font_name,
          color: controls_style?.text_color,
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
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderWidth: 2,
        },
        ".MuiSvgIcon-root": {
          zIndex: 1,
        },
        "& input": { borderRadius: controls_style?.radius + "px" },
      },
    },
  };
};

export default selectStyleOverride;
