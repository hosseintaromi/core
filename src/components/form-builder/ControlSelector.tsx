import { ControlType, ControlTypeEnum } from "../../@types/ControlTypes";
import TextBox from "./controls/TextBox";
// import DatePicker from "../form-builder/controls/DatePicker";
// import DropDown from "../form-builder/controls/DropDown";
// import FileUpload from "../form-builder/controls/FileUpload";
// import Group from "../form-builder/controls/Group";
// import MultipleOption from "../form-builder/controls/MultipleOption";
// import PlaceHolder from "../form-builder/controls/PlaceHolder";
// import TextArea from "../form-builder/controls/TextArea";

const ControlSelector = ({ control }: { control: ControlType }) => {
  switch (control.type) {
    case ControlTypeEnum.TextBox:
      return <TextBox control={control} />;
    // case ControlTypeEnum.DatePicker:
    //   return (
    //     <DatePicker
    //       form={form}
    //       formState={formState}
    //       index={index}
    //       controlFormState={controlFormState}
    //     />
    //   );
    // case ControlTypeEnum.DropDown:
    //   return (
    //     <DropDown
    //       form={form}
    //       formState={formState}
    //       index={index}
    //       controlFormState={controlFormState}
    //     />
    //   );
    // case ControlTypeEnum.FileUpload:
    //   return (
    //     <FileUpload
    //       form={form}
    //       formState={formState}
    //       index={index}
    //       controlFormState={controlFormState}
    //     />
    //   );
    // case ControlTypeEnum.Group:
    //   return <Group form={form} formState={formState} index={index} />;
    // case ControlTypeEnum.MultipleOption:
    //   return (
    //     <MultipleOption
    //       form={form}
    //       formState={formState}
    //       index={index}
    //       controlFormState={controlFormState}
    //     />
    //   );
    // case ControlTypeEnum.PlaceHolder:
    //   return <PlaceHolder form={form} formState={formState} index={index} />;
    // case ControlTypeEnum.TextArea:
    //   return (
    //     <TextArea
    //       form={form}
    //       formState={formState}
    //       index={index}
    //       controlFormState={controlFormState}
    //     />
    //   );
    default:
      return <></>;
  }
};

export default ControlSelector;
