import { ThemeProvider, Box } from "@mui/material";
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
        <BackgroundStyle backgroundStyles={formTheme.background}>
          <PartialTabContainer containerName="FormContainer" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            position="absolute"
            left={0}
            right={0}
            bottom={0}
            zIndex={1}
          >
            <NextButton />
            <LinearProgressWithLabel />
          </Box>
        </BackgroundStyle>
      </FormPageContextProvider>
    </ThemeProvider>
  );
};

export default FormPage;
