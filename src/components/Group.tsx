import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import Control from "./Control";
import { FieldValues, UseFormRegister } from "react-hook-form";

type GroupPropsType = {
  item: ControlType;
  register: UseFormRegister<FieldValues>;
};

const Group: FC<GroupPropsType> = ({ item, register }) => (
  <div>
    {item.group_info?.controls?.map((item) => Control({ item, register }))}
  </div>
);

export default Group;
