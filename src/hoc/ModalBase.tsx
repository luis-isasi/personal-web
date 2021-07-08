import ReactDOM from 'react-dom'

const ModalBase: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  const Element = document.querySelector('#modal')

  return ReactDOM.createPortal(
    <div className={`${className} w-screen h-screen fixed top-0 left-0 z-20`}>
      {children}
    </div>,
    Element as Element
  )
}

export default ModalBase
