import { Box, LinearProgress, Typography, styled, Stack } from "@mui/material";
import { getProgress } from "../../../utils/progressUtils";
import { hideControlsWithConditionOn } from "../../../utils/controlUtils";
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
  const progress = getProgress(form, indexes);
  console.log(progress);

  const allPages = hideControlsWithConditionOn(form.controls).filter(
    (x) => !x.is_hidden,
  ).length;

  return (
    <Stack spacing={1} maxWidth="50%" width="120px">
      <Box
        display="inline-flex"
        alignItems="center"
        color={form.theme.labels_style?.text_color}
        sx={{ mb: ".15rem !important" }}
      >
        <Typography
          variant="body2"
          component="span"
          pr={0.75}
          sx={{ fontSize: "small" }}
        >
          {indexes[0] + 1 || 1}/{Math.max(indexes[0] + 1, allPages) || allPages}{" "}
        </Typography>
        <Typography variant="body2" component="span" sx={{ fontSize: "small" }}>
          <Localizer localeKey="YOU_ANSWERED" />
        </Typography>
      </Box>
      <LinearProgressStyle variant="determinate" value={progress} />
    </Stack>
  );
};

export default LinearProgressWithLabel;
