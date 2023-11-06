import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type FileUploadPropsType = {
  item: ControlType;
};

const FileUpload: FC<FileUploadPropsType> = ({ item }) => <input type="text" />;

export default FileUpload;
