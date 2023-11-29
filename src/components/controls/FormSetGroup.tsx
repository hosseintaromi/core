import ControlWrapper from "../formPage/ControlWrapper";
import ControlSelector from "../formPage/ControlSelector";
import { ControlType } from "../../@types/controls/ControlTypes";
import { useCallback, useContext, useEffect, useState } from "react";
import { FBContext } from "../../context/FBContextProvider";
import { hideControlsWithConditionOn } from "../../utils/controlUtils";
import { Box, styled } from "@mui/material";
import { ThemeType } from "../../@types/ThemeTypes";
import groupStyle from "../../utils/theme/groupStyle";

const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

type GroupPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
  theme: ThemeType;
  hideQuestionNumber?: boolean;
};

const FormSetGroup = ({
  control,
  isFloatingBox,
  theme,
  hideQuestionNumber,
}: GroupPropsType) => {
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
    <ContainerStyle sx={{ ...groupStyle(theme.groups_style) }}>
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
              theme={theme}
            />
          </ControlWrapper>
        ))}
    </ContainerStyle>
  );
};

export default FormSetGroup;
