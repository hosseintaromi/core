import { Container, styled } from "@mui/material";
import { ThemeType } from "../../@types/ThemeTypes";
import { getBackgroundPosition } from "../../utils/styleUtils";
interface BackgroundStyleProps {
  formTheme?: ThemeType;
}

const BackgroundStyle = styled(Container, {
  shouldForwardProp: (prop: any) => prop !== "formTheme",
})<BackgroundStyleProps>(({ formTheme }) => {
  const backgroundStyles = formTheme?.background;
  const imageAlign = backgroundStyles?.image_align;

  return {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "0 !important",
    maxWidth: "100% !important",
    ".partial-tab-container": {
      backgroundColor: backgroundStyles?.color || "#fff",
      backgroundImage: `url("${backgroundStyles?.image_url}")`,
      opacity: backgroundStyles?.image_opacity,
      ...(imageAlign && getBackgroundPosition(imageAlign)),
    },
    ".view-wrapper": {
      overflowY: "scroll",
      paddingInline: formTheme?.padding?.horizontal + "px",
      paddingBlock: formTheme?.padding?.vertical + "px",
    },
  };
});

export default BackgroundStyle;
