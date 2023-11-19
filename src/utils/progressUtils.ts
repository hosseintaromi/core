import { FormType } from "../@types/FormTypes";
import { hideControlsWithConditionOn } from "./controlUtils";

export const getProgress = (form: FormType, indexes: number[]) =>
  (indexes[0] /
    hideControlsWithConditionOn(form.controls).filter((x) => !x.is_hidden)
      .length) *
  100;

const createCounter = () => {
  let count = 0;

  function counter() {
    count++;
    return count;
  }

  return counter;
};

// Create a counter instance
export const questionCounter = createCounter();
