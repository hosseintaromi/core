import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useFormPage } from "../hooks/useFormPage";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { getNextIndex } from "../utils/controlUtils";

const NextButton = () => {
  const [isFinish, setIsFinish] = useState(false);

  const { submitForm, submitNext, form } = useFormPage({
    onIndexChanged: (indexes: number[]) => {
      setIsFinish(!getNextIndex(form, indexes));
    },
  });

  return (
    <Box>
      {isFinish ? (
        <Box display="flex" gap={2}>
          <Button variant="outlined" disabled onClick={() => submitForm()}>
            <ExpandLessIcon />
          </Button>
          <Button variant="outlined" onClick={() => submitForm()}>
            ارسال
          </Button>
        </Box>
      ) : (
        <Button variant="outlined" onClick={() => submitNext()}>
          <ExpandLessIcon />
        </Button>
      )}
    </Box>
  );
};

export default NextButton;
