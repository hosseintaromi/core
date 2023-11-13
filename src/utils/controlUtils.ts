import { FieldValues } from "react-hook-form";
import {
  ConditionCompositionEnum,
  ConditionTypeEnum,
} from "../@types/ConditionTypes";
import {
  ControlConditionType,
  ControlConditionTypesEnum,
} from "../@types/ControlConditionTypes";
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

export const getControlById = (
  controls: ControlType[],
  id: string,
): ControlType | null => {
  for (let i = 0; i < controls.length; i++) {
    const control = controls[i];
    if (control.control_id === id) {
      return control;
    } else if (control.group_info?.controls) {
      return getControlById(control.group_info?.controls, id);
    }
  }
  return null;
};

const getNextIndexFromConditions = (
  form: FormType,
  indexes: number[],
  values: FieldValues,
) => {
  let thenId: string | null | undefined;
  const currentControl = getControl(form.controls, indexes);
  if (
    currentControl?.conditions &&
    (currentControl?.type !== ControlTypeEnum.Group ||
      (currentControl.group_info?.type === GroupTypesEnum.FieldSet &&
        currentControl?.type === ControlTypeEnum.Group))
  ) {
    thenId = passCondition(
      currentControl?.conditions,
      values[currentControl.control_id],
      ControlConditionTypesEnum.ThenGo,
    );
    if (!thenId) {
      return null;
    }
    let thenIndex: number | undefined;
    if (indexes.length === 1) {
      thenIndex = form.controls.findIndex((item) => item.control_id === thenId);
    } else {
      const group = getControl(form.controls, indexes.slice(0, -1));
      thenIndex = group?.group_info?.controls?.findIndex(
        (item) => item.control_id === thenId,
      );
    }
    return thenIndex ? indexes.slice(0, -1).concat(thenIndex) : [];
  }
  // currentControl?.conditions?.map(condition => {
  //   if(condition.type !== )
  // })
  return indexes;
};

export const getNextIndex = (
  form: FormType,
  index: number[],
  values?: FieldValues,
): number[] | null => {
  if (!form.controls?.length) {
    return null;
  }
  if (values) {
    const nextIndexBaseOnCondition = getNextIndexFromConditions(
      form,
      index,
      values,
    );
    if (nextIndexBaseOnCondition) {
      return nextIndexBaseOnCondition;
    }
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

export const passCondition = (
  conditions: ControlConditionType[],
  value: string,
  controlConditionType: ControlConditionTypesEnum = ControlConditionTypesEnum.ThenShow,
) => {
  for (let j = 0; j < conditions.length; j++) {
    const condition = conditions[j];
    if (condition.type !== controlConditionType) {
      continue;
    }
    let overallValue: boolean | undefined = undefined;
    if (!condition.conditions) return null;
    for (let i = 0; i < condition.conditions.length || 0; i++) {
      const cond = condition.conditions[i];
      const prevCond = i === 0 ? null : condition.conditions[i - 1];
      let currValue;
      if (!cond.condition_value) {
        return null;
      }
      const conditionValue = parseInt(cond.condition_value);
      const numberValue = parseInt(value);
      if (cond.condition_type === ConditionTypeEnum.Equal) {
        currValue = conditionValue === numberValue;
      } else if (cond.condition_type === ConditionTypeEnum.LessThan) {
        currValue = conditionValue > numberValue;
      } else if (cond.condition_type === ConditionTypeEnum.MoreThan) {
        currValue = conditionValue < numberValue;
      } else if (cond.condition_type === ConditionTypeEnum.NotEqual) {
        currValue = conditionValue !== numberValue;
      }

      if (
        !currValue &&
        cond.composition_type === ConditionCompositionEnum.And
      ) {
        overallValue = false;
        break;
      }
      overallValue =
        overallValue === undefined
          ? currValue
          : prevCond?.composition_type === ConditionCompositionEnum.And
          ? overallValue && currValue
          : overallValue || currValue;
    }

    if (overallValue) {
      return condition.then_control_id;
    }
  }
  return null;
};

export const hideControlsWithConditionOn = (controls: ControlType[]) => {
  let filteredControls = [...controls];
  for (let i = 0; i < controls.length; i++) {
    const control = controls[i];
    if (control.conditions?.length) {
      for (let j = 0; j < control.conditions.length; j++) {
        const condition = control.conditions[j];
        filteredControls.map((item) => {
          if (item.control_id === condition.then_control_id) {
            item.is_hidden = true;
          }
          return item;
        });
      }
    }
  }
  return filteredControls;
};

export const getControlParentById = (
  parent: ControlType,
  controls: ControlType[],
  id: string,
): ControlType | null => {
  for (let i = 0; i < controls.length; i++) {
    const control = controls[i];
    if (control.control_id === id) {
      return parent;
    } else if (control.group_info?.controls) {
      return getControlParentById(control, control.group_info?.controls, id);
    }
  }
  return null;
};
