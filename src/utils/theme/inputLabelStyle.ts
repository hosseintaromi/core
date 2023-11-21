import { ThemeType } from "../../@types/ThemeTypes";

const inputLabelStyle = ({ labels_style, font_size, font_name }: ThemeType) => {
  console.log(labels_style);
  return {
    styleOverrides: {
      root: {
        marginBlock: labels_style?.margin?.horizontal + "px",
        marginInline: labels_style?.margin?.vertical + "px",
        fontSize: labels_style?.font_size || font_size + "px",
        fontWeight: labels_style?.font_weight,
        color: labels_style?.text_color,
        fontFamily: font_name,
        paddingInline: labels_style?.padding?.horizontal + "px",
        paddingBlock: labels_style?.padding?.vertical + "px",
      },
    },
  };
};
export default inputLabelStyle;
