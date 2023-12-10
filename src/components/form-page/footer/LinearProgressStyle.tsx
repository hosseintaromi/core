import {
  Box,
  LinearProgress,
  Typography,
  styled,
  Stack,
  useTheme,
} from "@mui/material";
import { getProgress } from "../../../utils/progressUtils";
import { PageIndexesType } from "../../../@types/FormPageTypes";
import { Localizer } from "../../shared/Localizer";
import { FormType, ProgressDisplayModeEnum } from "../../../@types/FormTypes";

const LinearProgressStyle = styled(LinearProgress)({
  width: "100%",
  marginTop: "0 !important",
});

type LinearProgressWithLabelProps = {
  indexes: PageIndexesType;
  form: FormType;
};

const LinearProgressWithLabel = ({
  indexes,
  form,
}: LinearProgressWithLabelProps) => {
  const { progress, thisPage, allPages } = getProgress(form, indexes);
  const theme = useTheme();

  const progressDisableMode = form.progress_display_mode;

  if (progressDisableMode === ProgressDisplayModeEnum.None) {
    return <div />;
  }

  return (
    <Stack spacing={1} maxWidth="50%" width="120px">
      <Box
        display="inline-flex"
        alignItems="center"
        color={theme.labelsStyle?.text_color}
        sx={{ mb: ".15rem !important" }}
      >
        {progressDisableMode === ProgressDisplayModeEnum.PageNumber ? (
          <Typography
            variant="body2"
            component="span"
            sx={{ fontSize: "small" }}
          >
            <Localizer
              localeKey="YOU_ANSWERED"
              params={{
                thisPage: <strong>{thisPage}</strong>,
                allPages: <strong>{allPages}</strong>,
              }}
            />
          </Typography>
        ) : (
          <Typography
            variant="body2"
            component="span"
            sx={{ fontSize: "small" }}
          >
            % {Math.floor(progress)}
          </Typography>
        )}
      </Box>
      <LinearProgressStyle variant="determinate" value={progress} />
    </Stack>
  );
};

export default LinearProgressWithLabel;
