import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { Box, Typography } from "@mui/material";
import { PlaceHolderTypeEnum } from "../../@types/PlaceHolderTypes";

type PlaceHolderPropsType = {
  control: ControlType;
};

const PlaceHolder: FC<PlaceHolderPropsType> = ({ control }) => {
  const placeHolderInfo = control.placeholder_info;
  const type = placeHolderInfo?.type;
  return (
    <Box
      textAlign={
        type === PlaceHolderTypeEnum.End
          ? "end"
          : type === PlaceHolderTypeEnum.Start
          ? "start"
          : "center"
      }
    >
      <Typography>{placeHolderInfo?.description}</Typography>
    </Box>
  );
};

export default PlaceHolder;
