import { ControlType } from "../@types/ControlTypes";
import { FormType } from "../@types/FormTypes";

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

export const getNextIndex = (form: FormType, index: number[]) => {
  if (!form.controls?.length) {
    return;
  }
  return getParentWithLeftChildren(form.controls, [...index], 0);
};

const getParentWithLeftChildren = (
  controls: ControlType[],
  index: number[],
  i: number,
) => {
  const parentControl = getControl(controls, index.slice(0, -1 - i));
  if (
    parentControl?.group_info?.controls &&
    parentControl?.group_info?.controls?.length > index[index.length - 2 - i]
  ) {
    index[index.length - 1 - i] = index[index.length - 1 - i] + 1;
    return index.splice(index.length - i, i);
  } else if (
    parentControl?.group_info?.controls &&
    parentControl?.group_info?.controls?.length <= index[index.length - 2 - i]
  ) {
    getParentWithLeftChildren(controls, index, i++);
  } else if (!parentControl && controls?.length > index[index.length - 1 - i]) {
    index[index.length - 1 - i] = index[index.length - 1 - i] + 1;
    return i === 0 ? index.slice(0) : index.slice(0, -i);
  } else {
    return null;
  }
};
