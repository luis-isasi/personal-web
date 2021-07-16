import * as React from 'react'

import { DARK, LIGHT, USER_SETTINGS } from '@Constants'
import { Theme, UserSettings } from '@Types'

type TypeContextTheme = {
  theme: Theme
  changeTheme: () => void
}

const ContextTheme = React.createContext<TypeContextTheme | undefined>(
  undefined
)

export const ContextThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(LIGHT)

  const conditionalTheme = theme === DARK ? LIGHT : DARK

  React.useEffect(() => {
    const user_settings = JSON.parse(
      localStorage.getItem(USER_SETTINGS) as string
    )

    if (user_settings) {
      setTheme(user_settings.theme)
    }
  }, [])

  React.useEffect(() => {
    let root = document.documentElement

    let user_settings: UserSettings = {
      theme,
    }

    localStorage.setItem(USER_SETTINGS, JSON.stringify(user_settings))
    root.classList.remove(conditionalTheme)
    root.classList.add(theme)
  }, [theme])

  const changeTheme = () => {
    setTheme(conditionalTheme)
  }

  return (
    <ContextTheme.Provider value={{ theme, changeTheme }}>
      {children}
    </ContextTheme.Provider>
  )
}

export const useContextTheme = () => {
  const dataTheme = React.useContext(ContextTheme)

  if (dataTheme === undefined) {
    throw new Error('Must be within Context Theme Provide')
  }

  return dataTheme
}
