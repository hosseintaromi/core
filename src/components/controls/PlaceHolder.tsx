import { FC } from "react";
import { ControlType } from "../../@types/controls/ControlTypes";
import { Box, Button, Typography } from "@mui/material";
import { ThemeType } from "../../@types/ThemeTypes";
import placeHolderStyle from "../../utils/theme/placeHolderStyle";
import { useFormPage } from "../../hooks/useFormPage";
import { PlaceHolderTypeEnum } from "../../@types/controls/PlaceHolderTypes";
import { Localizer } from "../Localizer";

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
          {placeHolderInfo.start_caption || (
            <Localizer localeKey="START_BUTTON" />
          )}
        </Button>
      )}
    </Box>
  );
};

export default PlaceHolder;
