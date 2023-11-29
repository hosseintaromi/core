import { Box, ThemeProvider, Typography, styled } from "@mui/material";
import PartialTabContainer from "../../core/components/containers/PartialTabContainer";
import theme from "../../utils/theme";
import BackgroundStyle from "./BackgroundStyle";
import form from "../../fakeData.json";
import { ThemeType } from "../../@types/ThemeTypes";
import { FormType } from "../../@types/FormTypes";
import { FormPageContextProvider } from "../../context/FormPageContextProvider";
import Footer from "./footer/Footer";
import { Localizer } from "../Localizer";

const NoActiveMessage = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#3390ec",
  minHeight: "2.5rem",
  height: "2.5rem",
  color: "#fff",
  userSelect: "none",
});

const FormPage = () => {
  const formData = form as any as FormType;
  const formTheme = form.theme as ThemeType;

  return (
    <ThemeProvider theme={theme(formTheme)}>
      <FormPageContextProvider form={formData}>
        <BackgroundStyle formtheme={formTheme}>
          <NoActiveMessage>
            <Typography sx={{ fontSize: "14px" }}>
              <Localizer localeKey="FORM_DISABLED" />
            </Typography>
          </NoActiveMessage>
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
