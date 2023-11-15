import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";

type PlaceHolderPropsType = {
  control: ControlType;
};
// TODO placeholder type
const PlaceHolder: FC<PlaceHolderPropsType> = ({ control }) => {
  if (!control) {
    return <></>;
  }
  // return (
  //   <ControlWrapper form={form} formState={formState} index={index}>
  //     <div>{control.placeholder_info?.description}</div>
  //   </ControlWrapper>
  // );
  return <></>;
};

export default PlaceHolder;
