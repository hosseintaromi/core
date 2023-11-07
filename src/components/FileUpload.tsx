import { ChangeEvent, FC } from "react";
import ControlWrapper from "./ControlWrapper";
import { FileTypeEnum } from "../@types/FileUploadTypes";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getControl } from "../utils/getControl";

type FileUploadPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const FileUpload: FC<FileUploadPropsType> = ({ form, formState, index }) => {
  const control = getControl(form.controls || [], index);
  if (!control) {
    return <></>;
  }

  const info = control.file_upload_info;
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
    <ControlWrapper form={form} formState={formState} index={index}>
      <input
        type="file"
        accept={acceptType}
        onChange={(e) => handleChange(e)}
      />
    </ControlWrapper>
  );
};

export default FileUpload;
