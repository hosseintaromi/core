import ControlWrapper from "../ControlWrapper";
import ControlSelector from "../ControlSelector";
import { ControlType } from "../../@types/ControlTypes";

type GroupPropsType = {
  control: ControlType;
};

const FormSetGroup = ({ control }: GroupPropsType) => (
  <>
    {control.group_info?.controls?.map((item: ControlType) => (
      <ControlWrapper key={item.control_id} control={item}>
        <ControlSelector control={item} />
      </ControlWrapper>
    ))}
  </>
);

export default FormSetGroup;
