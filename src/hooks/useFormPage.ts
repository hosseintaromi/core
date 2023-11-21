import { useContext, useEffect, useRef } from "react";
import {
  FormPageContext,
  IndexListenersType,
} from "../context/FormPageContextProvider";

export const useFormPage = ({
  onIndexChanged,
  id,
}: {
  onIndexChanged?: IndexListenersType;
  id?: string;
}) => {
  const { addIndexListener, form, submitForm, submitNext, addNewQuestion } =
    useContext(FormPageContext);

  useEffect(() => {
    onIndexChanged && addIndexListener(onIndexChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    form,
    submitForm,
    submitNext,
    getQuestionNumber: () => id && addNewQuestion(id),
  };
};
