import { ThemeType } from "../../@types/ThemeTypes";

const fileUploadStyle = ({
  controls_style,
  font_name,
  font_size,
  answer_color,
}: ThemeType) => ({
  fontSize: controls_style?.font_size || font_size + "px",
  fontWeight: controls_style?.font_weight,
  fontFamily: font_name,
  color: controls_style?.text_color || answer_color,
  backgroundColor: controls_style?.background_color,
  borderTop: controls_style?.border?.top,
  borderBottom: controls_style?.border?.bottom,
  borderRight: controls_style?.border?.right,
  borderLeft: controls_style?.border?.left,
  borderRadius: controls_style?.radius + "px",
  boxShadow: controls_style?.shadow,
  paddingInline: controls_style?.padding?.horizontal + "px",
  paddingBlock: controls_style?.padding?.vertical + "px",
});

export default fileUploadStyle;
