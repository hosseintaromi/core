import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import DatePicker from "./controls/DatePicker";
import DropDown from "./controls/DropDown";
import FormSetGroup from "./controls/FormSetGroup";
import MultipleOption from "./controls/MultipleOption";
import PlaceHolder from "./controls/PlaceHolder";
import TextArea from "./controls/TextArea";
import TextBox from "./controls/TextBox";

const ControlSelector = ({ control }: { control: ControlType }) => {
  switch (control.type) {
    case ControlTypeEnum.TextBox:
      return <TextBox control={control} />;
    case ControlTypeEnum.DatePicker:
      return <DatePicker control={control} />;
    case ControlTypeEnum.DropDown:
      return <DropDown control={control} />;
    // case ControlTypeEnum.FileUpload:
    //   return (
    //     <FileUpload
    //       form={form}
    //       formState={formState}
    //       index={index}
    //       controlFormState={controlFormState}
    //     />
    //   );
    case ControlTypeEnum.Group:
      return <FormSetGroup control={control} />;
    case ControlTypeEnum.MultipleOption:
      return <MultipleOption control={control} />;
    case ControlTypeEnum.PlaceHolder:
      return <PlaceHolder control={control} />;
    case ControlTypeEnum.TextArea:
      return <TextArea control={control} />;
    default:
      return <></>;
  }
};

export default ControlSelector;
