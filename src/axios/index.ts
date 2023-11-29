import {
  ApiMethodEnum,
  DoneFormRequestDateType,
  DoneFormResponseDateType,
  GetEventControlsRequestDateType,
  GetEventControlsResponseDateType,
  GetFormRequestDataType,
  GetFormResponseDataType,
  RequestSendFileRequestDateType,
  RequestSendFileResponseDateType,
  SendAnswerRequestDateType,
  SendAnswerResponseDateType,
  SendFileHeaderDateType,
  SendFileRequestDateType,
  SendFileResponseDateType,
} from "../@types/AxiosApiTypes";
import { HttpMiddleware, PureHttpMiddleware } from "./Middleware";

export const AxiosApi = {
  GetForm: (data: GetFormRequestDataType) =>
    HttpMiddleware<GetFormResponseDataType>({
      payload: {
        data,
        method: ApiMethodEnum.GET_FORM,
      },
    }),
  SendAnswer: (data: SendAnswerRequestDateType) =>
    HttpMiddleware<SendAnswerResponseDateType>({
      payload: {
        data,
        method: ApiMethodEnum.SEND_ANSWER,
      },
    }),
  DoneForm: (data: DoneFormRequestDateType) =>
    HttpMiddleware<DoneFormResponseDateType>({
      payload: {
        data,
        method: ApiMethodEnum.DONE_FORM,
      },
    }),
  GetEventControls: (data: GetEventControlsRequestDateType) =>
    HttpMiddleware<GetEventControlsResponseDateType>({
      payload: {
        data,
        method: ApiMethodEnum.DONE_FORM,
      },
    }),
  RequestSendFile: (data: RequestSendFileRequestDateType) =>
    HttpMiddleware<RequestSendFileResponseDateType>({
      payload: {
        data,
        method: ApiMethodEnum.DONE_FORM,
      },
    }),
  SendFile: ({
    data,
    headers,
  }: {
    data: SendFileRequestDateType;
    headers: SendFileHeaderDateType;
  }) =>
    PureHttpMiddleware<SendFileResponseDateType>({
      data,
      headers,
      method: ApiMethodEnum.DONE_FORM,
    }),
};
