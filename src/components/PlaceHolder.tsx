import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import ControlWrapper from "./ControlWrapper";

type PlaceHolderPropsType = {
  item: ControlType;
};

const PlaceHolder: FC<PlaceHolderPropsType> = ({ item }) => (
  <ControlWrapper id={item.control_id} label={item.label_text}>
    <div>{item.placeholder_info?.description}</div>
  </ControlWrapper>
);

export default PlaceHolder;
