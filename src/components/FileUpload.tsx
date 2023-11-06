import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import ControlWrapper from "./ControlWrapper";

type FileUploadPropsType = {
  item: ControlType;
};

const FileUpload: FC<FileUploadPropsType> = ({ item }) => (
  <ControlWrapper id={item.control_id} label={item.label_text}>
    <input type="text" />
  </ControlWrapper>
);

export default FileUpload;
