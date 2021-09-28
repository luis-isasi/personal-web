import Form from './Form'

const contactme = () => {
  return (
    <div className="w-full h-full ">
      <div className="text-white w-full px-5 max-w-sm h-auto mx-auto mt-20">
        <span className="text-2xl">👋</span>
        <p className="mt-4 mb-10">Hola, enviame un mensaje para contactarme</p>
        <Form />
      </div>
    </div>
  )
}

export default contactme
