import { FC } from "react";
import { ControlType } from "../@types/ControlTypes";

type MultipleOptionPropsType = {
  item: ControlType;
};

const MultipleOption: FC<MultipleOptionPropsType> = ({ item }) => (
  <div>
    <label htmlFor="">{item.label_text}</label>
    {item.multiple_option_info?.multi_select ? (
      <>
        {item.multiple_option_info?.options?.map((option) => (
          <>
            <input type="checkbox" name={option.value} />
            <label htmlFor={option.value}>{option.text}</label>
          </>
        ))}
      </>
    ) : (
      <>
        {item.multiple_option_info?.options?.map((option) => (
          <>
            <input type="radio" id={option.value} name={item.control_id} />
            <label htmlFor={option.value}>{option.text}</label>
          </>
        ))}
      </>
    )}
  </div>
);

export default MultipleOption;
