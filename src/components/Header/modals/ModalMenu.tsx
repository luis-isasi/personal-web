import ModalBase from '@Hoc/ModalBase'

interface Props {
  closeModal: () => void
}

const ModalMenu: React.FC<Props> = ({ closeModal }) => {
  return (
    <ModalBase className="bg-gray-500 opacity-50">
      <button onClick={closeModal}>X</button>
    </ModalBase>
  )
}

export default ModalMenu
