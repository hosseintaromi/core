import { ControlType, ControlTypeEnum } from "../@types/ControlTypes";
import { FormType } from "../@types/FormTypes";
import { GroupTypesEnum } from "../@types/GroupTypes";

export const getControl = (
  controls: ControlType[],
  index: number[],
): ControlType | null => {
  if (!index.length) {
    return null;
  }
  if (index.length === 1) {
    return controls?.[index[0]];
  }
  return getControl(
    controls?.[index[0]].group_info?.controls || [],
    index.slice(1),
  );
};

export const getNextIndex = (
  form: FormType,
  index: number[],
): number[] | null => {
  if (!form.controls?.length) {
    return null;
  }
  const nextIndex = getParentWithLeftChildren(form.controls, [...index], 0);
  if (!nextIndex) {
    return null;
  }
  const nextControl = getControl(form.controls, nextIndex);
  if (!nextControl) {
    return null;
  }
  if (
    nextControl.type === ControlTypeEnum.Group &&
    nextControl.group_info?.type === GroupTypesEnum.FieldSet &&
    nextControl.group_info.controls?.length
  ) {
    return nextIndex.concat(0);
  }
  return nextIndex;
};

const getParentWithLeftChildren = (
  controls: ControlType[],
  index: number[],
  i: number,
): number[] | null => {
  const parentControl = getControl(controls, index.slice(0, -1 - i));
  if (
    parentControl?.group_info?.controls &&
    parentControl?.group_info?.controls?.length >
      index[index.length - 1 - i] + 1
  ) {
    index[index.length - 1 - i] = index[index.length - 1 - i] + 1;
    return i === 0 ? index.slice(0) : index.slice(0, -i);
  } else if (
    parentControl?.group_info?.controls &&
    parentControl?.group_info?.controls?.length <=
      index[index.length - 1 - i] + 1
  ) {
    return getParentWithLeftChildren(controls, index, i + 1);
  } else if (
    !parentControl &&
    controls?.length > index[index.length - 1 - i] + 1
  ) {
    index[index.length - 1 - i] = index[index.length - 1 - i] + 1;
    return i === 0 ? index.slice(0) : index.slice(0, -i);
  } else {
    return null;
  }
};
