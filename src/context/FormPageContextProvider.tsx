import { ReactNode, createContext, memo, useEffect, useRef } from "react";
import { FormPageViewDataType, PageIndexesType } from "../@types/FormPageTypes";
import { FormType } from "../@types/FormTypes";
import { getNextIndex } from "../utils/controlUtils";
import { FieldValues } from "react-hook-form";
import { openView } from "../core/utils/viewManager";
import FormPageItem from "../components/FormPageItem";

export type IndexListenersType = (indexes: PageIndexesType) => void;

export const FormPageContext = createContext<{
  addNewQuestion: (id: string) => number;
  getQuestionNumber: (id: string) => number;
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
      const pagesStack = questionStackRef.current;
      if (pagesStack.includes(id)) {
        const index = pagesStack.findIndex((item) => item === id);
        pagesStack.slice(0, index + 1);
      } else {
        pagesStack.push(id);
      }
      return pagesStack.length;
    };

    const getQuestionNumber = (id: string) =>
      questionStackRef.current.findIndex((item) => item === id) + 1;

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

    const gotoNext = (data: FieldValues, indexes: number[] | null) => {
      // if (!control.control_id) {
      //   return;
      // }
      console.log(indexesRef.current);
      let nextIndexes = getNextIndex(form, indexesRef.current || [], data);
      // console.log(nextIndexes);
      //closeView(control.control_id, ViewContainerType.MasterTab);
      if (!nextIndexes || !nextIndexes.length) {
        return;
      }
      indexesRef.current = nextIndexes;
      indexListenersRef.current.forEach((listener) => listener(nextIndexes!));
      openPage(nextIndexes);
    };

    const addIndexListener = (listener: IndexListenersType) => {
      indexListenersRef.current.push(listener);
    };

    const submitNext = () =>
      viewDataRef.current?.submitHandler?.((data) =>
        gotoNext(data, indexesRef.current),
      )();

    const submitForm = () =>
      viewDataRef.current?.submitHandler?.((data) => console.log(data))();

    useEffect(() => {
      document.title = form.title || "Form Builder";
      openPage([0]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <FormPageContext.Provider
          value={{
            addNewQuestion,
            getQuestionNumber,
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
