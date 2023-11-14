import ControlWrapper from "../ControlWrapper";
import ControlSelector from "../ControlSelector";
import { ControlType } from "../../@types/ControlTypes";
import { useCallback, useContext, useEffect, useState } from "react";
import { FBContext } from "../../context/FBContextProvider";
import { hideControlsWithConditionOn } from "../../utils/controlUtils";
import { ThemeType } from "../../@types/ThemeTypes";

type GroupPropsType = {
  control: ControlType;
  theme: ThemeType;
};

const FormSetGroup = ({ control, theme }: GroupPropsType) => {
  const [controls, setControls] = useState<ControlType[]>([]);

  const { registerFormSet } = useContext(FBContext);

  const listenControlChanges = useCallback((newControls: ControlType[]) => {
    setControls([...newControls]);
  }, []);

  useEffect(() => {
    registerFormSet(listenControlChanges, control.control_id);
    setControls(
      hideControlsWithConditionOn(control.group_info?.controls || []),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="group">
      {controls
        ?.filter((x) => !x.is_hidden)
        .map((controlItem: ControlType) => (
          <ControlWrapper key={controlItem.control_id} control={controlItem}>
            <ControlSelector control={controlItem} theme={theme} />
          </ControlWrapper>
        ))}
    </div>
  );
};

export default FormSetGroup;
