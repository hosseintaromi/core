import { FC, Fragment } from "react";
import { shuffle } from "../utils/shuffle";
import { MultipleOptionTypeEnum } from "../@types/MultipleOptionTypes";
import ControlWrapper from "./ControlWrapper";
import { FormType } from "../@types/FormTypes";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getControl } from "../utils/getControl";

type MultipleOptionPropsType = {
  form: FormType;
  formState: UseFormReturn<FieldValues, any, undefined>;
  index: number[];
};

const MultipleOption: FC<MultipleOptionPropsType> = ({
  form,
  formState,
  index,
}) => {
  const control = getControl(form.controls || [], index);
  if (!control) {
    return <></>;
  }
  const info = control.multiple_option_info;

  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  return (
    <ControlWrapper form={form} formState={formState} index={index}>
      {info?.multi_select ? (
        <>
          {options?.map((option, i) => (
            <Fragment key={i}>
              <input type="checkbox" name={option.value} />
              <label htmlFor={option.value}>{option.text}</label>
              {info.type === MultipleOptionTypeEnum.Image && (
                <img alt={option.text} src={option.image_url} />
              )}
            </Fragment>
          ))}
        </>
      ) : (
        <>
          {options?.map((option, i) => (
            <Fragment key={i}>
              <input type="radio" id={option.value} name={control.control_id} />
              <label htmlFor={option.value}>{option.text}</label>
              {info?.type === MultipleOptionTypeEnum.Image && (
                <img alt={option.text} src={option.image_url} />
              )}
            </Fragment>
          ))}
        </>
      )}
    </ControlWrapper>
  );
};

export default MultipleOption;
