import { Box, LinearProgress, Typography, styled, Stack } from "@mui/material";
import { getProgress } from "../utils/progressUtils";
import { hideControlsWithConditionOn } from "../utils/controlUtils";
import { useFormPage } from "../hooks/useFormPage";
import { useState } from "react";
import { PageIndexesType } from "../@types/FormPageTypes";

const LinearProgressStyle = styled(LinearProgress)({
  width: "100%",
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
    <Stack spacing={1} width="50%" textAlign="right">
      <Box>
        <Typography variant="body2" color="text.secondary">
          {indexes[0] + 1}/{Math.max(indexes[0] + 1, allPages)}
        </Typography>
      </Box>
      <LinearProgressStyle variant="determinate" value={progress} />
    </Stack>
  );
}

export default LinearProgressWithLabel;
