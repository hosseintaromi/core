import { useState } from "react";
import { Button } from "@mui/material";
import { useFormPage } from "../hooks/useFormPage";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const NextButton = () => {
  const [isFinish, setIsFinish] = useState(false);

  const { submitForm, submitNext } = useFormPage({
    onIndexChanged: (indexes: number[]) => {
      setIsFinish(!indexes?.length);
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
