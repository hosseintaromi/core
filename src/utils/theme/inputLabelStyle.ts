import { ThemeType } from "../../@types/ThemeTypes";

const inputLabelStyle = ({ labels_style, font_size, font_name }: ThemeType) => {
  console.log(labels_style);
  return {
    styleOverrides: {
      root: {
        fontSize: labels_style?.font_size || font_size + "px",
        fontWeight: labels_style?.font_weight,
        color: labels_style?.text_color,
        fontFamily: font_name,
        paddingInline: labels_style?.padding?.horizontal + "px",
        paddingBlock: labels_style?.padding?.vertical + "px",
        "&.Mui-focused": {
          color: labels_style?.text_color,
        },
      },
    },
  };
};
export default inputLabelStyle;
