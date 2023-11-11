import { ControlTypeEnum } from "../../@types/ControlTypes";
import { FormType } from "../../@types/FormTypes";
import { useView } from "../../core/hooks/useView";
import PageWrapper from "../PageWrapper";
import { GroupTypesEnum } from "../../@types/GroupTypes";
import { getControl } from "../../utils/getControl";
import ControlSelector from "./ControlSelector";
import ControlWrapper from "./ControlWrapper";
import { FBContextProvider } from "../../context/FBContextProvider";

type ControlPropsType = {
  form?: FormType;
  index?: number[];
};

const FormPage = (props: ControlPropsType) => {
  const { viewData } = useView();
  const { form, index } = props || viewData;
  const control = getControl(form?.controls || [], index || []);
  if (!control) {
    return <></>;
  }
  const isFieldSetGroup =
    control?.type === ControlTypeEnum.Group &&
    control?.group_info?.type === GroupTypesEnum.FormSet;

  if (form && index) {
    return (
      <FBContextProvider>
        {isFieldSetGroup ? (
          <ControlWrapper control={control}>
            <ControlSelector control={control} />
          </ControlWrapper>
        ) : (
          <PageWrapper form={form} index={index} control={control}>
            <ControlWrapper control={control}>
              <ControlSelector control={control} />
            </ControlWrapper>
          </PageWrapper>
        )}
      </FBContextProvider>
    );
  }
  return <></>;
};

export default FormPage;
