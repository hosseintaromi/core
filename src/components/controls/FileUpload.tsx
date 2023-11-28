import { ChangeEvent, FC } from "react";
import { ControlType } from "../../@types/controls/ControlTypes";
import { FileTypeEnum } from "../../@types/controls/FileUploadTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { Box, Typography, Button, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Localizer } from "../Localizer";
import { useFormPage } from "../../hooks/useFormPage";
import fileUploadStyle from "../../utils/theme/fileUploadStyle";

type FileUploadPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
};

const FileUpload: FC<FileUploadPropsType> = ({ control }) => {
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);
  const { form } = useFormPage({});

  const info = control.file_upload_info;
  let acceptType: string = "";
  const controlStyles = form.theme.controls_style;

  switch (info?.file_type) {
    case FileTypeEnum.Image:
      acceptType = "image/*";
      break;
    case FileTypeEnum.Doc:
      acceptType =
        ".doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      break;
    case FileTypeEnum.Video:
      acceptType = "video/*";
      break;
    case FileTypeEnum.Voice:
      acceptType = "audio/*";
      break;
    case FileTypeEnum.Zip:
      acceptType = ".zip, application/zip";
      break;
    case FileTypeEnum.Any:
      acceptType = "*/*";
      break;
    default:
      break;
  }

  const allowedExtensions = info?.allowed_extensions;
  if (allowedExtensions?.length) {
    acceptType = "";
    allowedExtensions.forEach((ext) => (acceptType += `, .${ext}`));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && info?.max_size && file?.size > info?.max_size) {
      console.error("max size");
    }
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="18.4375rem"
        minWidth="12.5rem"
        height="7.5rem"
        sx={fileUploadStyle(form.theme)}
      >
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          <Typography variant="caption" component="span">
            <Localizer localeKey="CHOOSE_FILE" />
          </Typography>
          <VisuallyHiddenInput
            type="file"
            accept={acceptType}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
          />
        </Button>
      </Box>
    </>
  );
};

export default FileUpload;
