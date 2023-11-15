import { ControlStyleType } from "../../@types/ThemeTypes";

const placeHolderStyle = (placeHoldersStyle?: ControlStyleType) => {
  const border = placeHoldersStyle?.border;
  return {
    marginBlock: placeHoldersStyle?.margin?.horizontal + "px",
    marginInline: placeHoldersStyle?.margin?.vertical + "px",
    backgroundColor: placeHoldersStyle?.background_color,
    fontSize: placeHoldersStyle?.font_size + "px",
    fontWeight: placeHoldersStyle?.font_weight,
    color: placeHoldersStyle?.text_color,
    borderTop: border?.top,
    borderBottom: border?.bottom,
    borderRight: border?.right,
    borderLeft: border?.left,
    borderRadius: placeHoldersStyle?.radius,
    boxShadow: placeHoldersStyle?.shadow,
    paddingBlock: placeHoldersStyle?.padding?.horizontal + "px",
    paddingInline: placeHoldersStyle?.padding?.vertical + "px",
  };
};

export default placeHolderStyle;
