import { ReactNode, createContext, memo, useEffect, useRef } from "react";
import { FormPageViewDataType, PageIndexesType } from "../@types/FormPageTypes";
import { FormType } from "../@types/FormTypes";
import { getNextIndex } from "../utils/controlUtils";
import { FieldValues } from "react-hook-form";
import { openView } from "../core/utils/viewManager";
import FormPageItem from "../components/FormPageItem";
import {
  QuestionAnswerType,
  QuestionAnswerTypeEnum,
  SendAnswerRequestDateType,
} from "../@types/AxiosApiTypes";
import { ControlTypeEnum } from "../@types/ControlTypes";
import { PlaceHolderTypeEnum } from "../@types/PlaceHolderTypes";

export type IndexListenersType = (indexes: PageIndexesType) => void;

export const FormPageContext = createContext<{
  addNewQuestion: (id: string) => number;
  addIndexListener: (listener: IndexListenersType) => void;
  form: FormType;
  submitNext: () => Promise<void> | undefined;
  submitForm: () => Promise<void> | undefined;
}>({} as any);

type FormPageContextProviderProps = {
  children: ReactNode;
  form: FormType;
};

export const FormPageContextProvider = memo(
  ({ children, form }: FormPageContextProviderProps) => {
    const questionStackRef = useRef<string[]>([]);
    const indexListenersRef = useRef<IndexListenersType[]>([]);
    const indexesRef = useRef<PageIndexesType>([0]);
    const viewDataRef = useRef<FormPageViewDataType>({});

    const addNewQuestion = (id: string) => {
      let pagesStack = questionStackRef.current;
      // if (pagesStack.includes(id)) {
      //   const index = pagesStack.findIndex((item) => item === id);
      //   console.log(index);
      //   pagesStack = pagesStack.slice(0, index + 1);
      // } else {
      pagesStack.push(id);
      // }
      return pagesStack.length;
    };

    const openPage = (indexes: number[]) => {
      viewDataRef.current = {
        form,
        indexes,
      };
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
      console.log("APICALL__sendAnswer", {
        form_id: form.form_id,
        answers: setAnswer(data),
      });

      let nextIndexes = getNextIndex(form, indexesRef.current || [], data);
      if (!nextIndexes || !nextIndexes.length) {
        return;
      }
      indexesRef.current = nextIndexes;
      indexListenersRef.current.forEach((listener) => listener(nextIndexes!));
      console.log(nextIndexes);
      openPage(nextIndexes);
    };

    const addIndexListener = (listener: IndexListenersType) => {
      indexListenersRef.current.push(listener);
    };

    const submitNext = () =>
      viewDataRef.current?.submitHandler?.((data) => gotoNext(data))();

    const submitForm = () =>
      viewDataRef.current?.submitHandler?.((data) => {
        gotoNext(data);
        console.log("APICALL__doneForm", {
          form_id: form.form_id,
        });
      })();

    useEffect(() => {
      document.title = form.title || "Form Builder";
      form.controls.push({
        control_id: "control_id_10",
        type: ControlTypeEnum.PlaceHolder,
        label_text: "قوانین",
        placeholder_info: {
          description: "قوانین را خوانده و تایید می‌نمایم.",
          type: PlaceHolderTypeEnum.End,
        },
      });
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
          }}
        >
          {children}
        </FormPageContext.Provider>
      </>
    );
  },
  () => true,
);
