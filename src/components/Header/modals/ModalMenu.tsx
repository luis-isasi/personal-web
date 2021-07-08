import ModalBase from '@Hoc/ModalBase'
import IconClose from '@Components/Icons/IconClose'
import Nav from '../components/Nav'

interface Props {
  closeModal: () => void
}

const ModalMenu: React.FC<Props> = ({ closeModal }) => {
  return (
    <ModalBase className="bg-dark-light">
      <div className="p-5 w-full h-full flex justify-between  md:mx-auto md:max-w-3xl">
        <div className="mt-8">
          <Nav />
        </div>
        <button onClick={closeModal} className="h-12 w-12">
          <IconClose className="w-10 h-10 text-white" />
        </button>
      </div>
    </ModalBase>
  )
}

export default ModalMenu
