import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { Box, Typography } from "@mui/material";
import { ThemeType } from "../../@types/ThemeTypes";
import placeHolderStyle from "../../utils/theme/placeHolderStyle";

type PlaceHolderPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const PlaceHolder: FC<PlaceHolderPropsType> = ({ control, theme }) => {
  const placeHolderInfo = control.placeholder_info;
  return (
    <Box sx={placeHolderStyle(theme.placeholders_style)}>
      <Typography>{placeHolderInfo?.description}</Typography>
    </Box>
  );
};

export default PlaceHolder;
