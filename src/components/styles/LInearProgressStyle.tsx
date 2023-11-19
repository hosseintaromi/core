import { Box, LinearProgress, Typography, styled } from "@mui/material";
import { FormType } from "../../@types/FormTypes";
import { getProgress } from "../../utils/progressUtils";
import { hideControlsWithConditionOn } from "../../utils/controlUtils";

const LinearProgressStyle = styled(LinearProgress)({
  width: "60%",
  left: "20%",
});

function LinearProgressWithLabel({
  form,
  indexes,
}: {
  form: FormType;
  indexes: number[];
}) {
  const value = getProgress(form, indexes);
  const allPages = hideControlsWithConditionOn(form.controls).filter(
    (x) => !x.is_hidden,
  ).length;
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{}}>
        <Typography variant="body2" color="text.secondary">
          {indexes[0] + 1}/{allPages}
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgressStyle variant="determinate" value={value} />
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
