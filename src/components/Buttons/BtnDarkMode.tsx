import IconDark from '@Components/Icons/IconDark'
import IconLight from '@Components/Icons/IconLight'
import useTheme from '@Hooks/useTheme'
import { DARK, LIGHT } from '@Constants'

const BtnDarkMode = () => {
  const { theme, changeTheme } = useTheme()

  const darkModeOff = new Audio('/Sounds/switch_darkmode-off.mp3')
  const darkModeOn = new Audio('/Sounds/switch_darkmode-on.mp3')

  //conditionals
  const isDark = theme === DARK
  const isLight = theme === LIGHT

  const onClick = () => {
    changeTheme()
    isDark && darkModeOff.play()
    isLight && darkModeOn.play()
  }

  return (
    <button onClick={onClick} className="flex justify-center items-center">
      {isLight && <IconLight className="w-6 h-6" />}
      {isDark && <IconDark className="w-6 h-6" />}
    </button>
  )
}

export default BtnDarkMode
