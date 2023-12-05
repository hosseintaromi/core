import { FC } from "react";
import { ControlType } from "../../../@types/controls/ControlTypes";
import { Box } from "@mui/material";
import FileDisplay from "../../shared/FileDisplay";
type FilePropsType = {
  control: ControlType;
};

const File: FC<FilePropsType> = ({ control }) => (
  <>
    {control.file_url && (
      <Box marginBlock={2}>
        <FileDisplay fileUrl={control.file_url} />
      </Box>
    )}
  </>
);

export default File;
