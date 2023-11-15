import { ChangeEvent, FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { FileTypeEnum } from "../../@types/FileUploadTypes";

type FileUploadPropsType = {
  control: ControlType;
};

const FileUpload: FC<FileUploadPropsType> = ({ control }) => {
  if (!control?.control_id) {
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

  // return (
  //   <ControlWrapper form={form} formState={formState} index={index}>
  //     <input
  //       type="file"
  //       accept={acceptType}
  //       {...register(control.control_id, getValidationObject(control))}
  //       {...controlRegister(control.control_id, {
  //         ...getValidationObject(control),
  //         onChange: handleChange,
  //       })}
  //     />
  //   </ControlWrapper>
  // );
  return <></>;
};

export default FileUpload;
