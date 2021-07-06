import { useState, useEffect } from 'react'

import { DARK, LIGHT, USER_SETTINGS } from '@Constants'
import { Theme, UserSettings } from '@Types'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(LIGHT)

  const conditionalTheme = theme === DARK ? LIGHT : DARK

  useEffect(() => {
    const user_settings = JSON.parse(
      localStorage.getItem(USER_SETTINGS) as string
    )

    if (user_settings) {
      setTheme(user_settings.theme)
    }
  }, [])

  useEffect(() => {
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

  return { theme, changeTheme }
}

export default useTheme
