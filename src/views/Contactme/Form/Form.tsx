import { useReducer, memo, useMemo } from 'react'
import type { Action, InitialState } from './types'
import { Fields, Status } from './types'

import Error from './components/Error'
import BtnSubmit from './components/BtnSubmit'
import IconLoading from '@Components/Icons/IconLoading'

const initialState: InitialState = {
  name: '',
  email: '',
  message: '',
  subject: '',
  error: {
    name: '',
    email: '',
    message: '',
    subject: '',
    formError: '',
  },
  status: Status.INITIAL,
}

const formReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.name]: action.value,
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: {
          ...state.error,
          formError: action.message,
        },
        status: Status.ERROR,
      }
    case 'SET_ERROR_FIELD':
      return {
        ...state,
        error: {
          ...state.error,
          [action.name]: action.message,
        },
        status: Status.ERROR,
      }
    case 'CLEAN_ERROR':
      return {
        ...state,
        error: {
          ...state.error,
          [action.name]: '',
          formError: '',
        },
        status: Status.INITIAL,
      }
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      }
    case 'CLEAN_FORM':
      return {
        ...state,
        name: '',
        email: '',
        message: '',
        subject: '',
        error: {
          name: '',
          email: '',
          message: '',
          subject: '',
          formError: '',
        },
      }
    default:
      return initialState
  }
}

const Form: React.FC<{ onSuccess?: () => void; onLoading?: () => void }> = ({
  onSuccess,
  onLoading,
}) => {
  const [formState, dispatch] = useReducer(formReducer, initialState)

  const { name, email, subject, message, status: formStatus } = formState

  const isFormError = useMemo(
    () => formStatus === Status.ERROR,
    [formState.status]
  )

  const isFormLoading = useMemo(
    () => formStatus === Status.LOADING,
    [formState.status]
  )

  const {
    name: nameError,
    message: messageError,
    email: emailError,
    subject: subjectError,
    formError,
  } = formState.error

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'SET_STATUS', status: Status.LOADING })
    onLoading!()

    const response: Response = await fetch('https://formspree.io/f/xrgrjvgj', {
      headers: { Accept: 'Application/json' },
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        asunto: subject,
        message: message,
      }),
    })

    if (response.ok) {
      dispatch({ type: 'SET_STATUS', status: Status.SUCCESS })
      dispatch({ type: 'CLEAN_FORM' })
      onSuccess!()
    } else {
      dispatch({ type: 'SET_STATUS', status: Status.ERROR })
      dispatch({
        type: 'SET_ERROR',
        message:
          'Al Parecer ocurrió algo salió mal, inténtalo de nuevo en un momento 😕',
      })
    }
  }

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    dispatch({ type: 'SET_FIELD', name, value })

    switch (name) {
      case Fields.name:
        validateField(name, value)
        break
      case Fields.email:
        validateEmail(name, value)
        break
      case Fields.subject:
        validateField(name, value)
        break
      case Fields.message:
        validateField(name, value)
        break
    }
  }

  const validateEmail = (name: string, value: string) => {
    if (!value) {
      dispatch({
        type: 'SET_ERROR_FIELD',
        name,
        message: 'Campo requerido',
      })
      return
    }

    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (emailRegex.test(value)) {
      dispatch({ type: 'CLEAN_ERROR', name })
    } else {
      dispatch({
        type: 'SET_ERROR_FIELD',
        name,
        message: 'Por favor, ingresa un email válido.',
      })
    }
  }

  const validateField = (name: string, value: string) => {
    if (!value) {
      dispatch({
        type: 'SET_ERROR_FIELD',
        name,
        message: 'Campo requerido.',
      })
    } else {
      dispatch({ type: 'CLEAN_ERROR', name })
    }
  }

  const isDisabledBtnSubmit = () => {
    return !nameError &&
      !messageError &&
      !emailError &&
      !subjectError &&
      !formError &&
      name &&
      email &&
      subject &&
      message &&
      !isFormError &&
      !isFormLoading
      ? false
      : true
  }

  return (
    <form
      className="text-black dark:text-white flex flex-col w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={name}
        required
        disabled={isFormLoading}
        placeholder="Nombre"
        className={`bg-transparent p-2 outline-none border-b-1 ${
          nameError ? 'border-red-500 caret-red-500' : 'border-gray-400'
        }`}
      />
      <Error>{nameError}</Error>
      <input
        type="email"
        onChange={handleChange}
        value={email}
        name="email"
        required
        disabled={isFormLoading}
        placeholder="Email"
        className={`bg-transparent p-2 outline-none border-b-1 ${
          emailError ? 'border-red-500 caret-red-500' : 'border-gray-400'
        } `}
      />
      <Error>{emailError}</Error>
      <input
        type="text"
        onChange={handleChange}
        value={subject}
        name="subject"
        required
        disabled={isFormLoading}
        placeholder="Asunto"
        className={`bg-transparent p-2 outline-none border-b-1 ${
          subjectError ? 'border-red-500 caret-red-500' : 'border-gray-400'
        } `}
      />
      <Error>{subjectError}</Error>
      <textarea
        onChange={handleChange}
        name="message"
        value={message}
        required
        disabled={isFormLoading}
        placeholder="Mensaje..."
        className={`${
          messageError ? 'border-red-500 caret-red-500' : 'border-gray-400'
        }  bg-transparent p-2 h-40 outline-none border-b-1 resize-none`}
      />
      <Error>{messageError}</Error>
      {formError && <Error>{formError}</Error>}
      {formStatus === Status.SUCCESS && (
        <span className="text-center mb-3 animate-fade-in text-sm font-medium ">
          Mensaje enviado Correctamente 😀
        </span>
      )}
      <BtnSubmit handleDisabled={isDisabledBtnSubmit}>
        {isFormLoading ? <IconLoading /> : 'Enviar'}
      </BtnSubmit>
    </form>
  )
}

export default memo(Form)
