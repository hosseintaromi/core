import { createTheme } from "@mui/material/styles";
import { ThemeType } from "../@types/ThemeTypes";
import textFieldStyleOverride from "./theme/textFieldStyle";
import inputLabelStyle from "./theme/inputLabelStyle";
import selectStyleOverride from "./theme/selectStyle";

const theme = (formTheme: ThemeType) =>
  createTheme({
    direction: "rtl",
    components: {
      MuiTextField: textFieldStyleOverride(formTheme?.controls_style),
      MuiInputLabel: inputLabelStyle(formTheme.labels_style),
      MuiSelect: selectStyleOverride(formTheme.controls_style),
    },
  });

export default theme;
