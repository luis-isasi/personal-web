import { useReducer } from 'react'
import type { Action, InitialState } from './types'
import { Fields, Status } from './types'

import Error from './components/Error'
import BtnSubmit from './components/BtnSubmit'

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
        },
      }
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      }
    case 'CLEAN_FORM':
      return initialState
    default:
      return initialState
  }
}

const Form = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState)

  const { name, email, subject, message, status } = formState

  const {
    name: nameError,
    message: messageError,
    email: emailError,
    subject: subjectError,
    formError,
  } = formState.error

  console.log({ formState })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
      console.log('enviado correctamente')

      dispatch({ type: 'SET_STATUS', status: Status.SUCCESS })
      dispatch({ type: 'CLEAN_FORM' })
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

  const isDisabledBtn = () => {
    return !nameError &&
      !messageError &&
      !emailError &&
      !subjectError &&
      !formError &&
      name &&
      email &&
      subject &&
      message
      ? false
      : true
  }

  return (
    <form className="text-white flex flex-col w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={name}
        required
        placeholder="Nombre"
        className={`${
          nameError && 'border-red-500 caret-red-500'
        } bg-transparent p-2 outline-none border-b-1 `}
      />
      <Error>{nameError}</Error>
      <input
        type="email"
        onChange={handleChange}
        value={email}
        name="email"
        required
        placeholder="Email"
        className={`${
          emailError && 'border-red-500 caret-red-500'
        } bg-transparent p-2 outline-none border-b-1`}
      />
      <Error>{emailError}</Error>
      <input
        type="text"
        onChange={handleChange}
        value={subject}
        name="subject"
        required
        placeholder="Asunto"
        className={`${
          subjectError && 'border-red-500 caret-red-500'
        } bg-transparent p-2 outline-none border-b-1`}
      />
      <Error>{subjectError}</Error>
      <textarea
        onChange={handleChange}
        name="message"
        value={message}
        required
        placeholder="Mensaje..."
        className={`${
          messageError && 'border-red-500 caret-red-500'
        } bg-transparent p-2 h-40 outline-none border-b-1 resize-none`}
      />
      <Error>{messageError}</Error>
      <Error>{formError}</Error>
      <BtnSubmit handleDisabled={isDisabledBtn} />
    </form>
  )
}

export default Form
