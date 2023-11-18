import { createTheme } from "@mui/material/styles";
import { ThemeType } from "../@types/ThemeTypes";
import textFieldStyleOverride from "./theme/textFieldStyle";
import inputLabelStyle from "./theme/inputLabelStyle";
import selectStyleOverride from "./theme/selectStyle";

const theme = (formTheme: ThemeType) =>
  createTheme({
    direction: "rtl",
    components: {
      MuiTextField: textFieldStyleOverride(
        formTheme?.controls_style,
        formTheme.answer_color,
      ),
      MuiInputLabel: inputLabelStyle(formTheme.labels_style),
      MuiSelect: selectStyleOverride(formTheme.controls_style),
    },
    typography: {
      fontSize: formTheme.font_size,
      fontFamily: formTheme.font_name,
    },
  });

export default theme;
