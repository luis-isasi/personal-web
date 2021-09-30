import { useRouter } from 'next/router'
import { useState } from 'react'

import Image from 'next/image'
import Form from './Form'

const msg_sent = 'message_sent'
const new_msg = 'new_message'

const contactme = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const router = useRouter()

  const onSuccess = () => {
    setIsSuccess(true)
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  const onLoading = () => {}

  return (
    <div className="w-full h-full">
      <div className="text-white w-full px-5 max-w-sm h-auto mx-auto mt-10">
        <Image
          layout="responsive"
          src={`/Images/${isSuccess ? msg_sent : new_msg}.svg`}
          width="300"
          height="200"
          className={`${isSuccess && 'animate-fade-in'}`}
        />
        <div>
          <p className="mt-6 mb-10 text-center text-black dark:text-white">
            👋 Hola, envíame un mensaje para contactarme
          </p>
        </div>
        <Form onSuccess={onSuccess} onLoading={onLoading} />
      </div>
    </div>
  )
}

export default contactme
