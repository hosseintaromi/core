import { ThemeType } from "../../@types/ThemeTypes";

const autoCompleteListStyle = ({
  controls_style,
  answer_color,
}: ThemeType) => ({
  styleOverrides: {
    paper: {
      backgroundColor: controls_style?.background_color,
      color: controls_style?.text_color || answer_color,
    },
    root: { ".MuiAutocomplete-endAdornment": { zIndex: 1 } },
  },
});

export default autoCompleteListStyle;
