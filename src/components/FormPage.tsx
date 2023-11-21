import { ThemeProvider } from "@mui/material";
import PartialTabContainer from "../core/components/containers/PartialTabContainer";
import theme from "../utils/theme";
import BackgroundStyle from "./styles/BackgroundStyle";
import form from "../fakeData.json";
import { ThemeType } from "../@types/ThemeTypes";
import { FormType } from "../@types/FormTypes";
import { FormPageContextProvider } from "../context/FormPageContextProvider";
import Footer from "./formPage/Footer";

const FormPage = () => {
  const formData = form as any as FormType;
  const formTheme = form.theme as ThemeType;

  return (
    <ThemeProvider theme={theme(formTheme)}>
      <FormPageContextProvider form={formData}>
        <BackgroundStyle formTheme={formTheme}>
          <PartialTabContainer containerName="FormContainer" />
          <Footer theme={formTheme} />
        </BackgroundStyle>
      </FormPageContextProvider>
    </ThemeProvider>
  );
};

export default FormPage;
