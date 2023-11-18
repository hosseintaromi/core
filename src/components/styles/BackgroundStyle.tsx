import { Box, BoxProps, styled } from "@mui/material";
import { ImageAlignEnum, ThemeBackgroundType } from "../../@types/ThemeTypes";
interface BackgroundStyleProps extends BoxProps {
  backgroundStyles?: ThemeBackgroundType;
}

const BackgroundStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundStyles",
})<BackgroundStyleProps>(({ backgroundStyles }) => {
  const imageAlign = backgroundStyles?.image_align;
  return {
    position: "absolute",
    inset: 0,
    backgroundColor: backgroundStyles?.color,
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
  };
});

export default BackgroundStyle;
