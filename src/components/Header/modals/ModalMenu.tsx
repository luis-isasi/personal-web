import ModalBase from '@Hoc/ModalBase'
import IconClose from '@Components/Icons/IconClose'
import Nav from '../components/Nav'

interface Props {
  handleModalNav: () => void
}

const ModalMenu: React.FC<Props> = ({ handleModalNav }) => {
  return (
    <ModalBase className="bg-dark-primary">
      <div className="p-5 w-full h-full flex justify-between  md:mx-auto md:max-w-3xl">
        <div className="mt-8">
          <Nav handleModalNav={handleModalNav} />
        </div>
        <button
          onClick={handleModalNav}
          className="h-12 w-12 transform active:scale-80 transition-all duration-150 ease-in-out animate-appear-rotating"
        >
          <IconClose className="w-10 h-10 text-white" />
        </button>
      </div>
    </ModalBase>
  )
}

export default ModalMenu
