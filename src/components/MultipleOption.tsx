import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";
import { shuffle } from "../utils/shuffle";
import { MultipleOptionTypeEnum } from "../@types/MultipleOptionTypes";
import ControlWrapper from "./ControlWrapper";

type MultipleOptionPropsType = {
  item: ControlType;
};

const MultipleOption: FC<MultipleOptionPropsType> = ({ item }) => {
  const info = item.multiple_option_info;

  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  return (
    <ControlWrapper id={item.control_id} label={item.label_text}>
      {info?.multi_select ? (
        <>
          {options?.map((option) => (
            <>
              <input type="checkbox" name={option.value} />
              <label htmlFor={option.value}>{option.text}</label>
              {info.type === MultipleOptionTypeEnum.Image && (
                <img alt={option.text} src={option.image_url} />
              )}
            </>
          ))}
        </>
      ) : (
        <>
          {options?.map((option) => (
            <>
              <input type="radio" id={option.value} name={item.control_id} />
              <label htmlFor={option.value}>{option.text}</label>
              {info?.type === MultipleOptionTypeEnum.Image && (
                <img alt={option.text} src={option.image_url} />
              )}
            </>
          ))}
        </>
      )}
    </ControlWrapper>
  );
};

export default MultipleOption;
