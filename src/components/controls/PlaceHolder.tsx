import { ControlType } from "../../@types/controls/ControlTypes";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import placeHolderStyle from "../../utils/theme/placeHolderStyle";
import { useFormPage } from "../../hooks/useFormPage";
import { PlaceHolderTypeEnum } from "../../@types/controls/PlaceHolderTypes";
import { Localizer } from "../shared/Localizer";

type PlaceHolderPropsType = {
  control: ControlType;
};

const PlaceHolder = ({ control }: PlaceHolderPropsType) => {
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
