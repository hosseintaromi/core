import { ThemeType } from "../../@types/ThemeTypes";

const dateTimePickerStyle = ({
  controls_style,
  labels_style,
  answer_color,
  font_size,
  font_name,
}: ThemeType) => {
  const border = controls_style?.border;
  return {
    ".MuiOutlinedInput-input": {
      fontSize: controls_style?.font_size || font_size + "px",
      fontFamily: font_name,
      fontWeight: controls_style?.font_weight,
      zIndex: 1,
      color: controls_style?.text_color || answer_color,
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
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderTop: border?.top,
        borderBottom: border?.bottom,
        borderRight: border?.right,
        borderLeft: border?.left,
        borderWidth: 2,
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: labels_style?.font_size || font_size + "px",
      fontWeight: labels_style?.font_weight,
      color: labels_style?.text_color,
      fontFamily: font_name,
      "&.Mui-focused": {
        color: labels_style?.text_color,
      },
    },
  };
};

export default dateTimePickerStyle;
