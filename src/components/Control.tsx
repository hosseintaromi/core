import { ControlTypeEnum } from "../@types/ControlTypes";
import TextBox from "./TextBox";
import DatePicker from "./DatePicker";
import DropDown from "./DropDown";
import FileUpload from "./FileUpload";
import Group from "./Group";
import MultipleOption from "./MultipleOption";
import PlaceHolder from "./PlaceHolder";
import TextArea from "./TextArea";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormType } from "../@types/FormTypes";
import { useView } from "../core/hooks/useView";
import PageWrapper from "./PageWrapper";
import { GroupTypesEnum } from "../@types/GroupTypes";
import { getControl } from "../utils/getControl";

type ControlPropsType = {
  form?: FormType;
  formState?: UseFormReturn<FieldValues, any, undefined>;
  index?: number[];
};

const ControlComponent = ({ form, formState, index }: ControlPropsType) => {
  if (index !== undefined && form && formState) {
    const control = getControl(form?.controls || [], index);
    switch (control?.type) {
      case ControlTypeEnum.TextBox:
        return <TextBox form={form} formState={formState} index={index} />;
      case ControlTypeEnum.DatePicker:
        return <DatePicker form={form} formState={formState} index={index} />;
      case ControlTypeEnum.DropDown:
        return <DropDown form={form} formState={formState} index={index} />;
      case ControlTypeEnum.FileUpload:
        return <FileUpload form={form} formState={formState} index={index} />;
      case ControlTypeEnum.Group:
        return <Group form={form} formState={formState} index={index} />;
      case ControlTypeEnum.MultipleOption:
        return (
          <MultipleOption form={form} formState={formState} index={index} />
        );
      case ControlTypeEnum.PlaceHolder:
        return <PlaceHolder form={form} formState={formState} index={index} />;
      case ControlTypeEnum.TextArea:
        return <TextArea form={form} formState={formState} index={index} />;
      default:
        return <></>;
    }
  }
  return <></>;
};

const Control = (props: ControlPropsType) => {
  const { viewData } = useView();
  const { form, formState, index } = props || viewData;
  const control = getControl(form?.controls || [], index?.slice(0, -1) || []);
  const isFieldSetGroup =
    control?.type === ControlTypeEnum.Group &&
    control?.group_info?.type === GroupTypesEnum.FormSet;

  if (form && formState && index) {
    return (
      <>
        {isFieldSetGroup ? (
          <ControlComponent form={form} formState={formState} index={index} />
        ) : (
          <PageWrapper form={form} formState={formState} index={index}>
            <ControlComponent form={form} formState={formState} index={index} />
          </PageWrapper>
        )}
      </>
    );
  }
  return <></>;
};

export default Control;
