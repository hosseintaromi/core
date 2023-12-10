import ControlWrapper from "../form-page/control-wrapper/ControlWrapper";
import ControlSelector from "../form-page/ControlSelector";
import { ControlType } from "../../@types/controls/ControlTypes";
import { useCallback, useContext, useEffect, useState } from "react";
import { FBContext } from "../../context/FBContextProvider";
import { hideControlsWithConditionOn } from "../../utils/controlUtils";
import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import groupStyle from "../../utils/theme/groupStyle";

const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

type GroupPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
  hideQuestionNumber?: boolean;
};

const FormSetGroup = ({
  control,
  isFloatingBox,
  hideQuestionNumber,
}: GroupPropsType) => {
  const [controls, setControls] = useState<ControlType[]>([]);

  const theme = useTheme();
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
    <ContainerStyle sx={{ ...groupStyle(theme.groupsStyle) }}>
      {controls
        ?.filter((x) => !x.is_hidden)
        .map((controlItem: ControlType) => (
          <ControlWrapper
            key={controlItem.control_id}
            control={controlItem}
            isFloatingBox={isFloatingBox}
            hideQuestionNumber={hideQuestionNumber}
          >
            <ControlSelector
              control={controlItem}
              isFloatingBox={isFloatingBox}
            />
          </ControlWrapper>
        ))}
    </ContainerStyle>
  );
};

export default FormSetGroup;
