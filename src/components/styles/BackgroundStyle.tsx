import { Container, ContainerProps, styled } from "@mui/material";
import { ImageAlignEnum, ThemeBackgroundType } from "../../@types/ThemeTypes";
interface BackgroundStyleProps extends ContainerProps {
  backgroundStyles?: ThemeBackgroundType;
}

const BackgroundStyle = styled(Container, {
  shouldForwardProp: (prop: any) => prop !== "containerStyles",
})<BackgroundStyleProps>(({ backgroundStyles }) => {
  const imageAlign = backgroundStyles?.image_align;
  return {
    display: "grid",
    gap: 3,
    justifyItems: "start",
    " .view-wrapper": {
      backgroundColor: backgroundStyles?.color || "#fff",
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
