import { useState } from 'react'

import Menu from '@Components/Icons/IconMenu'
//TODO: evaluar para hacer un import dynamic
import ModalMenu from '@Components/Header/modals/ModalMenu'

const BtnMenu = () => {
  const [isModalMenu, setIsModalMenu] = useState<boolean>(false)

  const onClick = () => {
    setIsModalMenu(!isModalMenu)
  }

  const handleModalNav = () => {
    setIsModalMenu(!isModalMenu)
  }

  return (
    <>
      <button
        onClick={onClick}
        className="transform active:scale-80 transition-all duration-150 ease-in-out"
      >
        <Menu className="dark:text-white" />
      </button>
      {isModalMenu && <ModalMenu handleModalNav={handleModalNav} />}
    </>
  )
}

export default BtnMenu
