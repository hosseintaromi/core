import { FC } from "react";
import { ControlType } from "../../@types/controls/ControlTypes";
import { Box, Button, Typography, useTheme } from "@mui/material";
import placeHolderStyle from "../../utils/theme/placeHolderStyle";
import { useFormPage } from "../../hooks/useFormPage";
import { PlaceHolderTypeEnum } from "../../@types/controls/PlaceHolderTypes";
import { Localizer } from "../Localizer";

type PlaceHolderPropsType = {
  control: ControlType;
};

const PlaceHolder: FC<PlaceHolderPropsType> = ({ control }) => {
  const placeHolderInfo = control.placeholder_info;
  const isStart = placeHolderInfo?.type === PlaceHolderTypeEnum.Start;
  const { submitNext } = useFormPage({});
  const theme = useTheme();

  return (
    <Box display="grid" gap={2} sx={placeHolderStyle(theme)}>
      <Typography>{placeHolderInfo?.description}</Typography>
      {isStart && (
        <Button sx={{ justifySelf: "center" }} onClick={() => submitNext()}>
          {placeHolderInfo.start_caption || (
            <Localizer localeKey="START_BUTTON" />
          )}
        </Button>
      )}
    </Box>
  );
};

export default PlaceHolder;
