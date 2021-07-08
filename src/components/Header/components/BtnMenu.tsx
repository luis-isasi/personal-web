import { useState } from 'react'

import Menu from '@Components/Icons/IconMenu'
//TODO: evaluar para hacer un import dynamic
import ModalMenu from '@Components/Header/modals/ModalMenu'

const BtnMenu = () => {
  const [isModalMenu, setIsModalMenu] = useState<boolean>(false)

  const onClick = () => {
    setIsModalMenu(!isModalMenu)
  }

  const closeModal = () => {
    setIsModalMenu(false)
  }

  return (
    <>
      <button onClick={onClick}>
        <Menu className="dark:text-white" />
      </button>
      {isModalMenu && <ModalMenu closeModal={closeModal} />}
    </>
  )
}

export default BtnMenu
