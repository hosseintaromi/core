import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import { ThemeType } from "../@types/ThemeTypes";
import FormSetGroup from "./controls/FormSetGroup";
import TextArea from "./controls/TextArea";
import TextBox from "./controls/TextBox";

const ControlSelector = ({
  control,
  theme,
}: {
  control: ControlType;
  theme: ThemeType;
}) => {
  switch (control.type) {
    case ControlTypeEnum.TextBox:
      return <TextBox control={control} theme={theme} />;
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
      return <FormSetGroup control={control} theme={theme} />;
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
