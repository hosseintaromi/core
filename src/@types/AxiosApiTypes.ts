import { ControlType } from "./ControlTypes";
import { FormType } from "./FormTypes";

export enum ApiMethodEnum {
  GET_FORM = "getForm",
  SEND_ANSWER = "sendAnswer",
  DONE_FORM = "doneForm",
  GET_EVENT_CONTROLS = "getEventControls",
  REQUEST_SEND_FILE = "requestSendFile",
  SEND_FILE = "sendFile",
}

export type GetFormRequestDataType = {
  form_id: string;
};

export type GetFormResponseDataType = {
  form: FormType;
};

export enum QuestionAnswerTypeEnum {
  OneValue = "OneValue",
  MultiValue = "MultiValue",
}

export type QuestionAnswerType = {
  control_id: string;
  answer_type?: QuestionAnswerTypeEnum;
  value?: string;
  values?: string[];
};

export type SendAnswerRequestDateType = {
  form_id: string;
  answers?: QuestionAnswerType[];
};

enum SendAnswerStatusEnum {
  Registered = "Registered",
  InvalidInput = "InvalidInput",
  TimeOut = "TimeOut",
  AlreadyRegistered = "AlreadyRegistered",
  NotAllowed = "NotAllowed",
}

export type SendAnswerResponseDateType = {
  status?: SendAnswerStatusEnum;
  error_control_ids?: { [key: string]: string };
};

export type DoneFormRequestDateType = { form_id: string };

enum DoneFormStatusEnum {
  Registered = "Registered",
  NotAllowed = "NotAllowed",
  AlreadyRegistered = "AlreadyRegistered",
  TimeOut = "TimeOut",
}

export type DoneFormResponseDateType = { status?: DoneFormStatusEnum };

export type GetEventControlsRequestDateType = {
  event_id: string;
  form_id: string;
  control_id: string;
  control_value: string;
};

export type GetEventControlsResponseDateType = {
  controls?: ControlType[];
};

export type RequestSendFileRequestDateType = {
  form_id: string;
  control_id: string;
  file_name: string;
  size?: number;
};

export type RequestSendFileResponseDateType = {};

export type SendFileResponseDateType = {};
