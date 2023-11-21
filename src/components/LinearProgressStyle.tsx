import { Box, LinearProgress, Typography, styled } from "@mui/material";
import { getProgress } from "../utils/progressUtils";
import { hideControlsWithConditionOn } from "../utils/controlUtils";
import { useFormPage } from "../hooks/useFormPage";
import { useState } from "react";
import { PageIndexesType } from "../@types/FormPageTypes";

const LinearProgressStyle = styled(LinearProgress)({
  width: "60%",
  left: "20%",
});

function LinearProgressWithLabel() {
  const [indexes, setIndexes] = useState<PageIndexesType>([]);

  const { form } = useFormPage({
    onIndexChanged: (indexes: number[]) => {
      setIndexes(indexes);
    },
  });

  const progress = getProgress(form, indexes);

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
          {indexes[0] + 1}/{Math.max(indexes[0] + 1, allPages)}
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgressStyle variant="determinate" value={progress} />
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
