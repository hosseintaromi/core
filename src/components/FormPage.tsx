import { FormType } from "../@types/FormTypes";
import { useView } from "../core/hooks/useView";
import { getControl } from "../utils/controlUtils";
import ControlSelector from "./ControlSelector";
import ControlWrapper from "./ControlWrapper";
import { FBContextProvider } from "../context/FBContextProvider";
import FormWrapper from "./FormWrapper";
import theme from "../utils/theme";
import { ThemeProvider } from "@emotion/react";
import BackgroundStyle from "./styles/BackgroundStyle";
import LinearProgressWithLabel from "./styles/LinearProgressStyle";

type ControlPropsType = {
  form?: FormType;
  indexes?: number[];
};

const FormPage = (props: ControlPropsType) => {
  const { viewData } = useView();
  const { form, indexes } = props || viewData;
  const control = getControl(form?.controls || [], indexes || []);

  if (!form || !indexes || indexes.length < 1 || !control) {
    return <></>;
  }
  console.log(form);
  return (
    <FBContextProvider control={control} defaultValues={form.values}>
      <ThemeProvider theme={theme(form.theme)}>
        <BackgroundStyle backgroundStyles={form.theme.background} />
        <FormWrapper form={form} indexes={indexes} control={control}>
          <ControlWrapper
            control={control}
            isFloatingBox={form.layout?.floating_box}
          >
            <ControlSelector
              control={control}
              isFloatingBox={form.layout?.floating_box}
              theme={form.theme}
            />
          </ControlWrapper>
        </FormWrapper>
        <LinearProgressWithLabel form={form} indexes={indexes} />
      </ThemeProvider>
    </FBContextProvider>
  );
};

export default FormPage;
