import { useEffect, useRef, useState } from "react";
import { openView } from "../core/utils/viewManager";
import { getControl, getNextIndex } from "../utils/controlUtils";
import { FieldValues } from "react-hook-form";
import { Button, Container, ThemeProvider } from "@mui/material";
import PartialTabContainer from "../core/components/containers/PartialTabContainer";
import theme from "../utils/theme";
import BackgroundStyle from "./styles/BackgroundStyle";
import FormPageItem, { ControlPropsType } from "./FormPageItem";
import form from "../fakeData.json";
import { ThemeType } from "../@types/ThemeTypes";
import { ControlType } from "../@types/ControlTypes";
import { FormType } from "../@types/FormTypes";
import LinearProgressWithLabel from "./styles/LinearProgressStyle";

const FormPage = () => {
  // const [isFinish, setIsFinish] = useState(false);
  const [indexes, setIndexes] = useState<number[] | null>([0]);
  // const indexesRef = useRef<number[] | null>([0]);
  const viewDataRef = useRef<ControlPropsType>();
  const control = form.controls[0] as ControlType;
  const formData = form as any as FormType;

  const isFinish = getNextIndex(formData, indexes || []);

  const openPage = (indexes: number[]) => {
    viewDataRef.current = {
      form: formData,
      indexes,
    };
    console.log(viewDataRef.current);
    openView({
      id: getControl(formData.controls || [], indexes || [])?.control_id,
      type: "FormContainer",
      data: viewDataRef.current,
      component: FormPageItem,
    });
  };

  const gotoNext = (data: FieldValues) => {
    console.log("submitNext");

    if (!control.control_id) {
      return;
    }
    let nextIndexes = getNextIndex(formData, indexes || [], data);
    //closeView(control.control_id, ViewContainerType.MasterTab);
    console.log(nextIndexes);
    if (!nextIndexes || !nextIndexes.length) {
      return;
    }
    setIndexes(nextIndexes);
    openPage(nextIndexes);
  };

  const submitNext = () =>
    viewDataRef.current?.submitHandler?.((data) => gotoNext(data))();

  const submitForm = () =>
    viewDataRef.current?.submitHandler?.((data) => console.log(data))();

  useEffect(() => {
    document.title = formData.title || "Form Builder";
    openPage([0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(indexes);

  const formTheme = form.theme as ThemeType;

  return (
    <Container
      sx={{
        display: "grid",
        gap: 3,
        justifyItems: "start",
      }}
    >
      <ThemeProvider theme={theme(formTheme)}>
        <BackgroundStyle backgroundStyles={formTheme.background} />
        <PartialTabContainer containerName="FormContainer" />
        {isFinish ? (
          <Button
            variant="outlined"
            sx={{ justifySelf: "flex-end" }}
            onClick={() => submitNext()}
          >
            next
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ justifySelf: "flex-end" }}
            onClick={() => submitForm()}
          >
            finish
          </Button>
        )}
        <LinearProgressWithLabel form={formData} indexes={indexes || []} />
      </ThemeProvider>
    </Container>
  );
};

export default FormPage;
