import { useState } from "react";
import { Button } from "@mui/material";
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
    <>
      {isFinish ? (
        <Button variant="contained" onClick={() => submitForm()}>
          <ExpandLessIcon />
        </Button>
      ) : (
        <Button variant="outlined" onClick={() => submitNext()}>
          <ExpandLessIcon />
        </Button>
      )}
    </>
  );
};

export default NextButton;
