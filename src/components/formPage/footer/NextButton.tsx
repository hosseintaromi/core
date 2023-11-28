import { Box, Button } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type NextButtonProps = {
  isFinished: boolean;
  submitForm: () => Promise<void> | undefined;
  submitNext: () => Promise<void> | undefined;
};

const NextButton = ({
  isFinished,
  submitForm,
  submitNext,
}: NextButtonProps) => (
  <Box>
    {isFinished ? (
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

export default NextButton;
