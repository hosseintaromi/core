import ControlWrapper from "../ControlWrapper";
import ControlSelector from "../ControlSelector";
import { ControlType } from "../../@types/ControlTypes";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { FBContext } from "../../context/FBContextProvider";
import { hideControlsWithConditionON } from "../../utils/controlUtils";

type GroupPropsType = {
  control: ControlType;
};

const FormSetGroup = ({ control }: GroupPropsType) => {
  const [controls, setControls] = useState<ControlType[]>([]);

  const { registerFormSet } = useContext(FBContext);

  const listen = useCallback((newControls: ControlType[]) => {
    setControls([...newControls]);
  }, []);

  useEffect(() => {
    registerFormSet(listen, control.control_id);
    setControls(
      hideControlsWithConditionON(control.group_info?.controls || []),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="group">
      {controls
        ?.filter((x) => !x.is_hidden)
        .map((controlItem: ControlType) => (
          <ControlWrapper key={controlItem.control_id} control={controlItem}>
            <ControlSelector control={controlItem} />
          </ControlWrapper>
        ))}
    </div>
  );
};

export default FormSetGroup;
