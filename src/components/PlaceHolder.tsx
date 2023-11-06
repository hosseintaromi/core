import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type PlaceHolderPropsType = {
  item: ControlType;
};

const PlaceHolder: FC<PlaceHolderPropsType> = ({ item }) => (
  <input type="text" />
);

export default PlaceHolder;
