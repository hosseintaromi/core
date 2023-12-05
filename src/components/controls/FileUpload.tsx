import { ChangeEvent, FC, useRef, useState } from "react";
import { ControlType } from "../../@types/controls/ControlTypes";
import { FileTypeEnum } from "../../@types/controls/FileUploadTypes";
import { useFBRegisterControl } from "../../hooks/useFBRegisterControl";
import { Box, Typography, Button, styled, useTheme } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Localizer } from "../shared/Localizer";
import fileUploadStyle from "../../utils/theme/fileUploadStyle";
import FileDisplay from "../shared/FileDisplay";
import { getDataUrl } from "../../utils/fileUpload";
import ClearIcon from "@mui/icons-material/Clear";

const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "8.5rem",
  alignSelf: "center",
  a: {
    display: "flex",
    justifyContent: "center",
    img: {
      height: "100%",
    },
  },
  img: {
    height: "7.5rem",
    objectFit: "contain",
  },
  video: {
    width: "80%",
  },
});

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

const RemoveFile = styled("span")({
  position: "absolute",
  top: 0,
  right: 2,
});

type FileUploadPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
};

const FileUpload: FC<FileUploadPropsType> = ({ control }) => {
  const [file, setFile] = useState<File | undefined>();
  const [fileUrl, setFileUrl] = useState<string>();
  let inputRef = useRef<HTMLInputElement | null>();
  const { onChange, onBlur, name, ref } = useFBRegisterControl(control);
  const theme = useTheme();

  const info = control.file_upload_info;
  const maxSize = info?.max_size;
  const fileType = info?.file_type;
  let acceptType: string = "";

  switch (fileType) {
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
    allowedExtensions.forEach((ext, index) =>
      index + 1 === allowedExtensions.length
        ? (acceptType += `.${ext}`)
        : (acceptType += `, .${ext}`),
    );
  }

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    onChange(e);
    if (file) {
      setFile(file);
      setFileUrl(await getDataUrl(file));
    }
  };

  return (
    <ContainerStyle sx={fileUploadStyle(theme)}>
      {file && fileUrl ? (
        <Box position="relative" display="flex">
          <FileDisplay fileUrl={fileUrl} file={file} />
          <RemoveFile
            onClick={() => {
              setFile(undefined);
              if (inputRef.current) inputRef.current.value = "";
              onChange({
                target: {
                  name: control.control_id,
                },
              });
            }}
          >
            <ClearIcon />
          </RemoveFile>
        </Box>
      ) : null}

      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{
          marginBottom: 1,
          visibility: file ? "hidden" : "visible",
          position: file ? "absolute" : "static",
        }}
      >
        <Typography variant="caption" component="span">
          <Localizer localeKey="CHOOSE_FILE" />
        </Typography>
        <VisuallyHiddenInput
          type="file"
          accept={acceptType}
          ref={(r) => {
            ref(r);
            if (r) {
              inputRef.current = r;
            }
          }}
          onChange={handleChange}
          onBlur={onBlur}
          name={name}
        />
      </Button>
      <Typography
        variant="caption"
        component="span"
        sx={{
          visibility: file ? "hidden" : "visible",
          position: file ? "absolute" : "static",
        }}
      >
        <Localizer
          localeKey="CHOOSE_FILE_FORMAT"
          params={{
            maxSize: <strong>{maxSize}</strong>,
            fileType: <strong>{acceptType}</strong>,
          }}
        />
      </Typography>
    </ContainerStyle>
  );
};

export default FileUpload;
