import { Container, ContainerProps, styled } from "@mui/material";
import { ImageAlignEnum, ThemeType } from "../../@types/ThemeTypes";
interface BackgroundStyleProps extends ContainerProps {
  formTheme?: ThemeType;
}

const BackgroundStyle = styled(Container, {
  shouldForwardProp: (prop: any) => prop !== "containerStyles",
})<BackgroundStyleProps>(({ formTheme }) => {
  const backgroundStyles = formTheme?.background;
  const imageAlign = backgroundStyles?.image_align;

  return {
    " .partial-tab-container": {
      backgroundColor: backgroundStyles?.color || "#fff",
    },
    " .view-wrapper": {
      backgroundColor: backgroundStyles?.color || "#fff",
      paddingInline: formTheme?.padding?.horizontal + "px",
      paddingBlock: formTheme?.padding?.vertical + "px",
      backgroundImage: `url(${backgroundStyles?.image_url})`,
      opacity: backgroundStyles?.image_opacity,
      ...(imageAlign && imageAlign === ImageAlignEnum.Left
        ? { backgroundPosition: "left" }
        : imageAlign === ImageAlignEnum.Center
        ? { backgroundPosition: "center" }
        : imageAlign === ImageAlignEnum.Right
        ? { backgroundPosition: "right" }
        : imageAlign === ImageAlignEnum.Repeat
        ? { backgroundRepeat: "repeat" }
        : imageAlign === ImageAlignEnum.Fit
        ? { backgroundSize: "cover" }
        : {}),
    },
  };
});

export default BackgroundStyle;
