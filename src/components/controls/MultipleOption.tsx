import { FC } from "react";
import { ControlType } from "../../@types/ControlTypes";
import { shuffle } from "../../utils/shuffle";

type MultipleOptionPropsType = {
  control: ControlType;
};

const MultipleOption: FC<MultipleOptionPropsType> = ({ control }) => {
  if (!control?.control_id) {
    return <></>;
  }
  const info = control.multiple_option_info;

  const options = info?.randomize_option_number
    ? shuffle(info.options || [])
    : info?.options;

  // return (
  //   <ControlWrapper form={form} formState={formState} index={index}>
  //     {info?.multi_select ? (
  //       <>
  //         {options?.map((option, i) => (
  //           <Fragment key={i}>
  //             <input
  //               type="checkbox"
  //               {...register(
  //                 control.control_id || "",
  //                 getValidationObject(control),
  //               )}
  //               {...controlRegister(
  //                 control.control_id || "",
  //                 getValidationObject(control),
  //               )}
  //             />
  //             <label htmlFor={option.value}>{option.text}</label>
  //             {info.type === MultipleOptionTypeEnum.Image && (
  //               <img alt={option.text} src={option.image_url} />
  //             )}
  //           </Fragment>
  //         ))}
  //         <>
  //           {errors?.[control.control_id]?.type && (
  //             <span>{errors?.[control.control_id]?.message?.toString()}</span>
  //           )}
  //         </>
  //       </>
  //     ) : (
  //       <>
  //         {options?.map((option, i) => (
  //           <Fragment key={i}>
  //             <input
  //               type="radio"
  //               id={option.value}
  //               {...register(
  //                 control.control_id || "",
  //                 getValidationObject(control),
  //               )}
  //               {...controlRegister(
  //                 control.control_id || "",
  //                 getValidationObject(control),
  //               )}
  //             />
  //             <label htmlFor={option.value}>{option.text}</label>
  //             {info?.type === MultipleOptionTypeEnum.Image && (
  //               <img alt={option.text} src={option.image_url} />
  //             )}
  //           </Fragment>
  //         ))}
  //         <>
  //           {errors?.[control.control_id]?.type && (
  //             <span>{errors?.[control.control_id]?.message?.toString()}</span>
  //           )}
  //         </>
  //       </>
  //     )}
  //   </ControlWrapper>
  // );
  return <></>;
};

export default MultipleOption;
