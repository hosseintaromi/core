import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import FormSetGroup from "./controls/FormSetGroup";
import TextArea from "./controls/TextArea";
import TextBox from "./controls/TextBox";

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
    case ControlTypeEnum.Group:
      return <FormSetGroup control={control} />;
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
    case ControlTypeEnum.TextArea:
      return <TextArea control={control} />;
    default:
      return <></>;
  }
};

export default ControlSelector;
