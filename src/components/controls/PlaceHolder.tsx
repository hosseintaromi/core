import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { Box, Button, Typography } from "@mui/material";
import { ThemeType } from "../../@types/ThemeTypes";
import placeHolderStyle from "../../utils/theme/placeHolderStyle";
import { useFormPage } from "../../hooks/useFormPage";
import { PlaceHolderTypeEnum } from "../../@types/PlaceHolderTypes";

type PlaceHolderPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const PlaceHolder: FC<PlaceHolderPropsType> = ({ control, theme }) => {
  const placeHolderInfo = control.placeholder_info;
  const isStart = placeHolderInfo?.type === PlaceHolderTypeEnum.Start;
  const { submitNext } = useFormPage({});

  return (
    <Box display="grid" gap={2} sx={placeHolderStyle(theme)}>
      <Typography>{placeHolderInfo?.description}</Typography>
      {isStart && (
        <Button sx={{ justifySelf: "end" }} onClick={() => submitNext()}>
          شروع
        </Button>
      )}
    </Box>
  );
};

export default PlaceHolder;
