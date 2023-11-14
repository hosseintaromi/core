import ControlWrapper from "../ControlWrapper";
import ControlSelector from "../ControlSelector";
import { ControlType } from "../../@types/ControlTypes";
import { useCallback, useContext, useEffect, useState } from "react";
import { FBContext } from "../../context/FBContextProvider";
import { hideControlsWithConditionOn } from "../../utils/controlUtils";
import { Box } from "@mui/material";

type GroupPropsType = {
  control: ControlType;
};

const FormSetGroup = ({ control }: GroupPropsType) => {
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
    <Box sx={{ display: "grid", gap: 2 }} id="group">
      {controls
        ?.filter((x) => !x.is_hidden)
        .map((controlItem: ControlType) => (
          <ControlWrapper key={controlItem.control_id} control={controlItem}>
            <ControlSelector control={controlItem} />
          </ControlWrapper>
        ))}
    </Box>
  );
};

export default FormSetGroup;
