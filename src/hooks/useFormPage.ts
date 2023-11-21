import { useContext, useEffect } from "react";
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
  const {
    addIndexListener,
    form,
    submitForm,
    submitNext,
    addNewQuestion,
    getQuestionNumber,
  } = useContext(FormPageContext);

  useEffect(() => {
    onIndexChanged && addIndexListener(onIndexChanged);
    id && addNewQuestion(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    form,
    submitForm,
    submitNext,
    getQuestionNumber: () => id && getQuestionNumber(id),
  };
};
