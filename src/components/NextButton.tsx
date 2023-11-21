import { useState } from "react";
import { Button } from "@mui/material";
import { useFormPage } from "../hooks/useFormPage";

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
        <Button
          variant="contained"
          sx={{ justifySelf: "flex-end", zIndex: 10 }}
          onClick={() => submitForm()}
        >
          finish
        </Button>
      ) : (
        <Button
          variant="outlined"
          sx={{ justifySelf: "flex-end", zIndex: 10 }}
          onClick={() => submitNext()}
        >
          next
        </Button>
      )}
    </>
  );
};

export default NextButton;
