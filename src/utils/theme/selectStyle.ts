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
        marginBlock: controls_style?.margin?.horizontal + "px",
        marginInline: controls_style?.margin?.vertical + "px",
        backgroundColor: controls_style?.background_color,
        ".MuiOutlinedInput-input": {
          fontSize: controls_style?.font_size || font_size + "px",
          fontWeight: controls_style?.font_weight,
          fontFamily: font_name,
          color: controls_style?.text_color,
        },
        ".MuiOutlinedInput-notchedOutline": {
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

export default selectStyleOverride;