import { createTheme } from "@mui/material/styles";
import { ThemeType } from "../../@types/ThemeTypes";
import textFieldStyleOverride from "./textFieldStyle";
import inputLabelStyle from "./inputLabelStyle";
import selectStyleOverride from "./selectStyle";
import buttonStyleOverride from "./buttonStyle";
import descriptionStyle from "./descriptionStyle";
import progressStyleOverride from "./progressStyle";
import autoCompleteListStyle from "./autoCompleteListStyle";
import selectListStyleOverride from "./selectListStyle";

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
      body2: descriptionStyle(formTheme),
    },
  });

export default theme;
