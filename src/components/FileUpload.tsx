import { ChangeEvent, FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import ControlWrapper from "./ControlWrapper";
import { FileTypeEnum } from "../@types/FileUploadTypes";

type FileUploadPropsType = {
  item: ControlType;
};

const FileUpload: FC<FileUploadPropsType> = ({ item }) => {
  const info = item.file_upload_info;
  let acceptType: string = "";

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

  return (
    <ControlWrapper id={item.control_id} label={item.label_text}>
      <input
        type="file"
        accept={acceptType}
        onChange={(e) => handleChange(e)}
      />
    </ControlWrapper>
  );
};

export default FileUpload;
