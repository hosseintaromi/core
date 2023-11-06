import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type GroupPropsType = {
  item: ControlType;
};

const Group: FC<GroupPropsType> = ({ item }) => <input type="text" />;

export default Group;
