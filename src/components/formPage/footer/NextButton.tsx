import { Box, Button } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type NextButtonProps = {
  isFinished: boolean;
  submitForm: () => Promise<void> | undefined;
  submitNext: () => Promise<void> | undefined;
  gotoPrev: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
};

const NextButton = ({
  isFinished,
  submitForm,
  submitNext,
  hasNext,
  hasPrev,
  gotoPrev,
}: NextButtonProps) => (
  <Box>
    {isFinished ? (
      <Box display="flex" gap={1}>
        <Button variant="outlined" disabled onClick={() => submitForm()}>
          <ExpandLessIcon />
        </Button>
        <Button variant="outlined" onClick={() => submitForm()}>
          ارسال
        </Button>
      </Box>
    ) : (
      <Box display="flex" gap={1}>
        {hasPrev !== false && (
          <Button variant="outlined" onClick={() => gotoPrev()}>
            <ExpandLessIcon />
          </Button>
        )}
        {hasNext !== false && (
          <Button variant="outlined" onClick={() => submitNext()}>
            <ExpandMoreIcon />
          </Button>
        )}
      </Box>
    )}
  </Box>
);

export default NextButton;
