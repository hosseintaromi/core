import { Box } from "@mui/material";
import LinearProgressWithLabel from "../LinearProgressStyle";
import NextButton from "../NextButton";
import { ThemeType } from "../../@types/ThemeTypes";
import { getControl } from "../../utils/controlUtils";
import { useFormPage } from "../../hooks/useFormPage";
import { useState } from "react";
import { PageIndexesType } from "../../@types/FormPageTypes";
import { ControlTypeEnum } from "../../@types/ControlTypes";
import { PlaceHolderTypeEnum } from "../../@types/PlaceHolderTypes";

const Footer = ({ theme }: { theme?: ThemeType }) => {
  const border = theme?.controls_style?.border;
  const [indexes, setIndexes] = useState<PageIndexesType>([0]);
  const { submitForm, submitNext, form } = useFormPage({
    onIndexChanged: (indexes: number[]) => {
      setIndexes(indexes);
    },
  });

  function hexToRgbA(hex: any, opacity: any = 1) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        "," +
        opacity +
        ")"
      );
    }
    throw new Error("Bad Hex");
  }

  const control = getControl(form.controls, indexes);
  const isFinished = control?.control_id === "send";
  if (
    control?.type === ControlTypeEnum.PlaceHolder &&
    control.placeholder_info?.type !== PlaceHolderTypeEnum.Note &&
    !isFinished
  ) {
    return <></>;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="60px"
      px={2}
      borderTop={border?.top}
      sx={{ backgroundColor: hexToRgbA(theme?.background?.color, 0.5) }}
    >
      <LinearProgressWithLabel form={form} indexes={indexes} />
      <NextButton
        submitForm={submitForm}
        submitNext={submitNext}
        isFinished={isFinished}
      />
    </Box>
  );
};

export default Footer;
