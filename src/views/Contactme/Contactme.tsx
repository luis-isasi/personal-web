import Image from 'next/image'
import Form from './Form'

const contactme = () => {
  return (
    <div className="w-full h-full">
      <div className="text-white w-full px-5 max-w-sm h-auto mx-auto mt-10">
        <Image
          layout="responsive"
          src="/Images/new_message.svg"
          width="300"
          height="200"
        />
        <div>
          <p className="mt-6 mb-10 text-center text-black dark:text-white">
            👋 Hola, enviame un mensaje para contactarme
          </p>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default contactme
