import { FC } from "react";
import {
  ControlType,
  ControlTypeEnum,
} from "../../../@types/controls/ControlTypes";
import { Box, Typography } from "@mui/material";

type DescriptionPropsType = {
  control: ControlType;
  isFloatingBox?: boolean;
};

const Description: FC<DescriptionPropsType> = ({ control, isFloatingBox }) => {
  const isFloatingDropDown =
    control.type === ControlTypeEnum.DropDown && isFloatingBox;

  return (
    <>
      {control.description && (
        <Box marginBlock={isFloatingDropDown ? 0 : 2}>
          <Typography variant="body2">{control.description}</Typography>
        </Box>
      )}
    </>
  );
};

export default Description;
