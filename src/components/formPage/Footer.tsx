import { Box } from "@mui/material";
import LinearProgressWithLabel from "../LinearProgressStyle";
import NextButton from "../NextButton";
import { ThemeType } from "../../@types/ThemeTypes";

const Footer = ({ theme }: { theme?: ThemeType }) => {
  const border = theme?.controls_style?.border;

  function hexToRgbA(hex: any, opacity: any = 1) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        "," +
        opacity +
        ")"
      );
    }
    throw new Error("Bad Hex");
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="60px"
      px={2}
      borderTop={border?.top}
      sx={{ backgroundColor: hexToRgbA(theme?.background?.color, 0.5) }}
    >
      <LinearProgressWithLabel />
      <NextButton />
    </Box>
  );
};

export default Footer;
