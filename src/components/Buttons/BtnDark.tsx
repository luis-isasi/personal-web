import IconDark from '@Components/Icons/IconDark'
import IconLight from '@Components/Icons/IconLight'
import useTheme from '@Hooks/useTheme'

const BtnDark = () => {
  const { theme, changeTheme } = useTheme()
  return (
    <button onClick={changeTheme} className="flex justify-center items-center">
      <IconLight className="w-6 h-6" />
    </button>
  )
}

export default BtnDark
