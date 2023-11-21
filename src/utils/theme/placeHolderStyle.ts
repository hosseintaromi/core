import { ThemeType } from "../../@types/ThemeTypes";

const placeHolderStyle = ({
  placeholders_style,
  font_size,
  font_name,
}: ThemeType) => {
  const border = placeholders_style?.border;
  return {
    marginBlock: placeholders_style?.margin?.horizontal + "px",
    marginInline: placeholders_style?.margin?.vertical + "px",
    backgroundColor: placeholders_style?.background_color,
    fontSize: placeholders_style?.font_size || font_size + "px",
    fontFamily: font_name,
    fontWeight: placeholders_style?.font_weight,
    color: placeholders_style?.text_color,
    borderTop: border?.top,
    borderBottom: border?.bottom,
    borderRight: border?.right,
    borderLeft: border?.left,
    borderRadius: placeholders_style?.radius + "px",
    boxShadow: placeholders_style?.shadow,
    paddingInline: placeholders_style?.padding?.horizontal + "px",
    paddingBlock: placeholders_style?.padding?.vertical + "px",
  };
};

export default placeHolderStyle;
