import { createTheme } from "@mui/material/styles";
import { ThemeType } from "../@types/ThemeTypes";
import textFieldStyleOverride from "./theme/textField";

const theme = (formTheme: ThemeType) => {
  const controlStyle = formTheme?.controls_style;
  return createTheme({
    direction: "rtl",
    components: {
      MuiTextField: textFieldStyleOverride(controlStyle),
    },
  });
};

export default theme;
