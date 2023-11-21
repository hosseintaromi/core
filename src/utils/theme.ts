import { createTheme } from "@mui/material/styles";
import { ThemeType } from "../@types/ThemeTypes";
import textFieldStyleOverride from "./theme/textFieldStyle";
import inputLabelStyle from "./theme/inputLabelStyle";
import selectStyleOverride from "./theme/selectStyle";
import buttonStyleOverride from "./theme/buttonStyle";

const theme = (formTheme: ThemeType) =>
  createTheme({
    direction: "rtl",
    components: {
      MuiTextField: textFieldStyleOverride(formTheme),
      MuiInputLabel: inputLabelStyle(formTheme),
      MuiSelect: selectStyleOverride(formTheme),
      MuiButton: buttonStyleOverride(formTheme),
    },
    typography: {
      fontSize: formTheme.font_size,
      fontFamily: formTheme.font_name,
    },
  });

export default theme;
