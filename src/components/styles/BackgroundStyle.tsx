import { Box, BoxProps, styled } from "@mui/material";
import { ImageAlignEnum, ThemeBackgroundType } from "../../@types/ThemeTypes";
interface BackgroundStyleProps extends BoxProps {
  backgroundStyles?: ThemeBackgroundType;
}

const BackgroundStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundStyles",
})<BackgroundStyleProps>(({ backgroundStyles }) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: backgroundStyles?.color,
  backgroundImage: `url(${backgroundStyles?.image_url})`,
  opacity: backgroundStyles?.image_opacity,
  ...(backgroundStyles?.image_align &&
  backgroundStyles?.image_align === ImageAlignEnum.Left
    ? { backgroundPosition: "left" }
    : backgroundStyles?.image_align === ImageAlignEnum.Center
    ? { backgroundPosition: "center" }
    : backgroundStyles?.image_align === ImageAlignEnum.Right
    ? { backgroundPosition: "right" }
    : backgroundStyles?.image_align === ImageAlignEnum.Repeat
    ? { backgroundRepeat: "repeat" }
    : backgroundStyles?.image_align === ImageAlignEnum.Fit
    ? { backgroundSize: "cover" }
    : {}),
}));

export default BackgroundStyle;
