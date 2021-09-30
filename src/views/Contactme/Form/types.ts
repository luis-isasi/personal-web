export enum Fields {
  name = 'name',
  email = 'email',
  message = 'message',
  subject = 'subject',
}

export enum Status {
  INITIAL = 'INITIAL',
  ERROR = 'ERROR',
  READY = 'READY',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
}

type StatusType =
  | Status.INITIAL
  | Status.ERROR
  | Status.READY
  | Status.LOADING
  | Status.SUCCESS

export type InitialState = {
  name: string
  email: string
  message: string
  subject: string
  error: {
    name: string
    email: string
    message: string
    subject: string
    formError: string
  }
  status: StatusType
}

export type Action =
  | {
      type: 'SET_FIELD'
      name: string
      value: string
    }
  | {
      type: 'SET_ERROR_FIELD'
      name: string
      message: string
    }
  | {
      type: 'SET_ERROR'
      message: string
    }
  | {
      type: 'CLEAN_ERROR'
      name: string
    }
  | {
      type: 'SET_STATUS'
      status: StatusType
    }
  | {
      type: 'CLEAN_FORM'
    }
