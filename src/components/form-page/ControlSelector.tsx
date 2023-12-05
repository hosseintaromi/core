import {
  ControlType,
  ControlTypeEnum,
} from "../../@types/controls/ControlTypes";
import { ThemeType } from "../../@types/ThemeTypes";
import DatePicker from "../controls/DatePicker";
import DropDown from "../controls/DropDown";
import FileUpload from "../controls/FileUpload";
import FormSetGroup from "../controls/FormSetGroup";
import MultipleOption from "../controls/multiple-option/MultipleOption";
import PlaceHolder from "../controls/PlaceHolder";
import TextArea from "../controls/TextArea";
import TextBox from "../controls/TextBox";

const ControlSelector = ({
  control,
  isFloatingBox,
  theme,
  hideQuestionNumber,
}: {
  control: ControlType;
  isFloatingBox?: boolean;
  theme: ThemeType;
  hideQuestionNumber?: boolean;
}) => {
  switch (control.type) {
    case ControlTypeEnum.TextBox:
      return <TextBox control={control} isFloatingBox={isFloatingBox} />;
    case ControlTypeEnum.DatePicker:
      return (
        <DatePicker
          control={control}
          isFloatingBox={isFloatingBox}
          theme={theme}
        />
      );
    case ControlTypeEnum.DropDown:
      return <DropDown control={control} isFloatingBox={isFloatingBox} />;
    case ControlTypeEnum.FileUpload:
      return <FileUpload control={control} isFloatingBox={isFloatingBox} />;
    case ControlTypeEnum.Group:
      return (
        <FormSetGroup
          control={control}
          isFloatingBox={isFloatingBox}
          theme={theme}
          hideQuestionNumber={hideQuestionNumber}
        />
      );
    case ControlTypeEnum.MultipleOption:
      return <MultipleOption control={control} theme={theme} />;
    case ControlTypeEnum.PlaceHolder:
      return <PlaceHolder control={control} theme={theme} />;
    case ControlTypeEnum.TextArea:
      return <TextArea control={control} isFloatingBox={isFloatingBox} />;
    default:
      return <></>;
  }
};

export default ControlSelector;
