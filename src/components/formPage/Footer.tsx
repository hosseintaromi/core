import { Box } from "@mui/material";
import LinearProgressWithLabel from "../LinearProgressStyle";
import NextButton from "../NextButton";
import { ThemeType } from "../../@types/ThemeTypes";

const Footer = ({ theme }: { theme?: ThemeType }) => {
  const border = theme?.controls_style?.border;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="50px"
      p={2}
      position="absolute"
      left={0}
      right={0}
      bottom={0}
      zIndex={1}
      borderTop={border?.top}
      sx={{ backgroundColor: theme?.background?.color + "90" }}
    >
      <NextButton />
      <LinearProgressWithLabel />
    </Box>
  );
};

export default Footer;
