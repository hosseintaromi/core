import { Box, ThemeProvider } from "@mui/material";
import PartialTabContainer from "../core/components/containers/PartialTabContainer";
import theme from "../utils/theme";
import BackgroundStyle from "./styles/BackgroundStyle";
import form from "../fakeData2.json";
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
        <BackgroundStyle
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: "0 !important",
            maxWidth: "100% !important",
          }}
          formTheme={formTheme}
        >
          <Box position="relative" flex="1 1 auto" height="100%">
            <PartialTabContainer
              className="form-wrapper"
              containerName="FormContainer"
            />
          </Box>
          <Footer theme={formTheme} />
        </BackgroundStyle>
      </FormPageContextProvider>
    </ThemeProvider>
  );
};

export default FormPage;
