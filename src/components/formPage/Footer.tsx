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
      height="60px"
      px={2}
      borderTop={border?.top}
      sx={{ backgroundColor: theme?.background?.color + "90" }}
    >
      <LinearProgressWithLabel />
      <NextButton />
    </Box>
  );
};

export default Footer;
