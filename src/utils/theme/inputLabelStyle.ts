import { ControlStyleType } from "../../@types/ThemeTypes";

const inputLabelStyle = (labelStyle?: ControlStyleType) => {
  const border = labelStyle?.border;
  return {
    styleOverrides: {
      root: {
        marginBlock: labelStyle?.margin?.horizontal + "px",
        marginInline: labelStyle?.margin?.vertical + "px",
        backgroundColor: labelStyle?.background_color,
        fontSize: labelStyle?.font_size + "px",
        fontWeight: labelStyle?.font_weight,
        color: labelStyle?.text_color,
        borderTop: border?.top,
        borderBottom: border?.bottom,
        borderRight: border?.right,
        borderLeft: border?.left,
        borderRadius: labelStyle?.radius,
        boxShadow: labelStyle?.shadow,
        paddingBlock: labelStyle?.padding?.horizontal + "px",
        paddingInline: labelStyle?.padding?.vertical + "px",
      },
    },
  };
};

export default inputLabelStyle;
