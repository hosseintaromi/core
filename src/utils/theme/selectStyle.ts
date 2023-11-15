import { ControlStyleType } from "../../@types/ThemeTypes";

const selectStyleOverride = (controlStyle?: ControlStyleType) => {
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
          color: controlStyle?.text_color,
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderTop: border?.top,
          borderBottom: border?.bottom,
          borderRight: border?.right,
          borderLeft: border?.left,
          borderRadius: controlStyle?.radius,
          boxShadow: controlStyle?.shadow,
          paddingBlock: controlStyle?.padding?.horizontal + "px",
          paddingInline: controlStyle?.padding?.vertical + "px",
        },
      },
    },
  };
};

export default selectStyleOverride;
