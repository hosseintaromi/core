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
import { Localizer } from "../../Localizer";
import { FormType } from "../../../@types/FormTypes";

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

  return (
    <Stack spacing={1} maxWidth="50%" width="120px">
      <Box
        display="inline-flex"
        alignItems="center"
        color={theme.labelsStyle?.text_color}
        sx={{ mb: ".15rem !important" }}
      >
        <Typography variant="body2" component="span" sx={{ fontSize: "small" }}>
          <Localizer
            localeKey="YOU_ANSWERED"
            params={{
              thisPage: <strong>{thisPage}</strong>,
              allPages: <strong>{allPages}</strong>,
            }}
          />
        </Typography>
      </Box>
      <LinearProgressStyle variant="determinate" value={progress} />
    </Stack>
  );
};

export default LinearProgressWithLabel;
