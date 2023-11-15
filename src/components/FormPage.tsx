import { FormType } from "../@types/FormTypes";
import { useView } from "../core/hooks/useView";
import { getControl } from "../utils/controlUtils";
import ControlSelector from "./ControlSelector";
import ControlWrapper from "./ControlWrapper";
import { FBContextProvider } from "../context/FBContextProvider";
import FormWrapper from "./FormWrapper";
import theme from "../utils/theme";
import { ThemeProvider } from "@emotion/react";

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
  return (
    <FBContextProvider control={control}>
      <ThemeProvider theme={theme(form.theme)}>
        <FormWrapper form={form} indexes={indexes} control={control}>
          <ControlWrapper
            control={control}
            isFloatingBox={form.layout.floating_box}
          >
            <ControlSelector
              control={control}
              isFloatingBox={form.layout.floating_box}
            />
          </ControlWrapper>
        </FormWrapper>
      </ThemeProvider>
    </FBContextProvider>
  );
};

export default FormPage;
