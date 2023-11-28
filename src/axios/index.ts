import {
  ApiMethodEnum,
  GetFormRequestDataType,
  GetFormResponseDataType,
} from "../@types/AxiosApiTypes";
import { HttpMiddleware } from "./Middleware";

export const AxiosApi = {
  GetForm: (data: GetFormRequestDataType) =>
    HttpMiddleware<GetFormResponseDataType>({
      payload: {
        data,
        method: ApiMethodEnum.GET_FORM,
      },
    }),
};
