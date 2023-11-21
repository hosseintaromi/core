import { Container, ThemeProvider } from "@mui/material";
import PartialTabContainer from "../core/components/containers/PartialTabContainer";
import theme from "../utils/theme";
import BackgroundStyle from "./styles/BackgroundStyle";
import form from "../fakeData.json";
import { ThemeType } from "../@types/ThemeTypes";
import { FormType } from "../@types/FormTypes";
import LinearProgressWithLabel from "./LinearProgressStyle";
import { FormPageContextProvider } from "../context/FormPageContextProvider";
import NextButton from "./NextButton";

const FormPage = () => {
  const formData = form as any as FormType;
  const formTheme = form.theme as ThemeType;

  return (
    <ThemeProvider theme={theme(formTheme)}>
      <FormPageContextProvider form={formData}>
        <Container
          sx={{
            display: "grid",
            gap: 3,
            justifyItems: "start",
          }}
        >
          <BackgroundStyle backgroundStyles={formTheme.background} />
          <PartialTabContainer containerName="FormContainer" />
          <NextButton />
          <LinearProgressWithLabel />
        </Container>
      </FormPageContextProvider>
    </ThemeProvider>
  );
};

export default FormPage;
