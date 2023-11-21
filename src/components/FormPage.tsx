import { ThemeProvider, Box } from "@mui/material";
import PartialTabContainer from "../core/components/containers/PartialTabContainer";
import theme from "../utils/theme";
import BackgroundStyle from "./styles/BackgroundStyle";
import form from "../fakeData2.json";
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
        <BackgroundStyle
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 0,
          }}
          backgroundStyles={formTheme.background}
        >
          <Box position="relative" flex="1 1 50px" height="100%">
            <PartialTabContainer containerName="FormContainer" />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="50px"
            px={1}
          >
            <LinearProgressWithLabel />
            <NextButton />
          </Box>
        </BackgroundStyle>
      </FormPageContextProvider>
    </ThemeProvider>
  );
};

export default FormPage;
