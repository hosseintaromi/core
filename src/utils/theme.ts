import { createTheme } from "@mui/material/styles";
import { ThemeType } from "../@types/ThemeTypes";
import textFieldStyleOverride from "./theme/textFieldStyle";
import inputLabelStyle from "./theme/inputLabelStyle";
import selectStyleOverride from "./theme/selectStyle";
import buttonStyleOverride from "./theme/buttonStyle";
import descriptionStyle from "./theme/descriptionStyle";
import progressStyleOverride from "./theme/progressStyle";
import autoCompleteListStyle from "./theme/autoCompleteListStyle";
import selectListStyleOverride from "./theme/selectListStyle";

const theme = (formTheme: ThemeType) =>
  createTheme({
    direction: "rtl",
    components: {
      MuiTextField: textFieldStyleOverride(formTheme),
      MuiInputLabel: inputLabelStyle(formTheme),
      MuiSelect: selectStyleOverride(formTheme),
      MuiButton: buttonStyleOverride(formTheme),
      MuiLinearProgress: progressStyleOverride(formTheme),
      MuiAutocomplete: autoCompleteListStyle(formTheme),
      MuiList: selectListStyleOverride(formTheme),
    },
    typography: {
      fontSize: formTheme.font_size,
      fontFamily: formTheme.font_name,
      subtitle2: descriptionStyle(formTheme),
    },
  });

export default theme;
