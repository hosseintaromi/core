import { ReactNode, createContext, memo, useEffect, useRef } from "react";
import { FormPageViewDataType, PageIndexesType } from "../@types/FormPageTypes";
import { FormType } from "../@types/FormTypes";
import { getControlById, getNextIndex } from "../utils/controlUtils";
import { FieldValues } from "react-hook-form";
import { openView } from "../core/utils/viewManager";
import FormPageItem from "../components/form-page/FormPageItem";
import {
  QuestionAnswerType,
  QuestionAnswerTypeEnum,
} from "../@types/AxiosApiTypes";
import { ControlTypeEnum } from "../@types/controls/ControlTypes";
import { PlaceHolderTypeEnum } from "../@types/controls/PlaceHolderTypes";
import { convertLocale } from "../hooks/useGlobalLocales";

export type IndexListenersType = (indexes: PageIndexesType) => void;

export const FormPageContext = createContext<{
  addNewQuestion: (id: string) => number;
  addIndexListener: (listener: IndexListenersType) => void;
  form: FormType;
  submitNext: () => Promise<void> | undefined;
  submitForm: () => Promise<void> | undefined;
  gotoPrev: () => void;
}>({} as any);

type FormPageContextProviderProps = {
  children: ReactNode;
  form: FormType;
};

export const FormPageContextProvider = memo(
  ({ children, form }: FormPageContextProviderProps) => {
    const questionStackRef = useRef<string[][]>([]);
    const pageStackRef = useRef<PageIndexesType[]>([]);
    const indexListenersRef = useRef<IndexListenersType[]>([]);
    const indexesRef = useRef<PageIndexesType>([0]);
    const viewDataRef = useRef<FormPageViewDataType>({});

    const addNewQuestion = (id: string) => {
      const control = getControlById(form.controls, id);
      if (
        control?.type === ControlTypeEnum.PlaceHolder &&
        control.placeholder_info?.type !== PlaceHolderTypeEnum.Note
      ) {
        return 0;
      }
      let pagesStack = questionStackRef.current;
      pagesStack[pagesStack.length - 1].push(id);
      let questionNumber = 0;
      pagesStack.forEach((item) => (questionNumber += item.length));
      return questionNumber;
    };

    const openPage = (indexes: number[]) => {
      viewDataRef.current = {
        form,
        indexes,
      };
      pageStackRef.current.push(indexes);
      questionStackRef.current.push([]);
      openView({
        type: "FormContainer",
        data: viewDataRef.current,
        component: FormPageItem,
      });
    };

    const setAnswer = (data: FieldValues) => {
      let answers: QuestionAnswerType[] = [];
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const value = data[key];
          const isMultiValue = typeof value === "object";

          answers.push({
            control_id: key,
            answer_type: isMultiValue
              ? QuestionAnswerTypeEnum.MultiValue
              : QuestionAnswerTypeEnum.OneValue,
            ...(isMultiValue ? { values: value } : { value }),
          });
        }
      }
      return answers;
    };

    const gotoNext = (data: FieldValues) => {
      console.log(data);
      if (Object.keys(data).length) {
        console.log("APICALL__sendAnswer", {
          form_id: form.form_id,
          answers: setAnswer(data),
        });
      }

      let nextIndexes = getNextIndex(form, indexesRef.current || [], data);
      if (!nextIndexes || !nextIndexes.length) {
        return;
      }
      indexesRef.current = nextIndexes;
      indexListenersRef.current.forEach((listener) => listener(nextIndexes!));
      openPage(nextIndexes);
    };

    const gotoPrev = () => {
      // TODO apicalls???

      questionStackRef.current.pop();
      questionStackRef.current.pop();
      pageStackRef.current.pop();
      let prevIndexes = pageStackRef.current.pop();
      if (!prevIndexes || !prevIndexes.length) {
        return;
      }
      indexesRef.current = prevIndexes;
      indexListenersRef.current.forEach((listener) => listener(prevIndexes!));
      openPage(prevIndexes);
    };

    const addIndexListener = (listener: IndexListenersType) => {
      indexListenersRef.current.push(listener);
    };

    const submitNext = () => {
      console.log("first");
      return viewDataRef.current?.submitHandler?.((data) => gotoNext(data))();
    };

    const submitForm = () =>
      viewDataRef.current?.submitHandler?.((data) => {
        console.log("APICALL__doneForm", {
          form_id: form.form_id,
        });
        gotoNext(data);
      })();

    const addSendPage = () => {
      const controls = form.controls;
      let firstEndPlaceHolder = controls.findIndex(
        (item) =>
          item.type === ControlTypeEnum.PlaceHolder &&
          item.placeholder_info?.type === PlaceHolderTypeEnum.End,
      );
      firstEndPlaceHolder =
        firstEndPlaceHolder !== -1 ? firstEndPlaceHolder : controls.length;
      controls.splice(firstEndPlaceHolder, 0, {
        control_id: "send",
        type: ControlTypeEnum.PlaceHolder,
        label_text: convertLocale({ key: "LAST_PAGE_LABEL" }).text,
        placeholder_info: {
          description: convertLocale({ key: "LAST_PAGE_DESCRIPTION" }).text,
          type: PlaceHolderTypeEnum.End,
        },
      });
    };

    useEffect(() => {
      document.title = form.title || "Form Builder";
      addSendPage();
      openPage([0]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <FormPageContext.Provider
          value={{
            addNewQuestion,
            addIndexListener,
            form,
            submitNext,
            submitForm,
            gotoPrev,
          }}
        >
          {children}
        </FormPageContext.Provider>
      </>
    );
  },
  () => true,
);
