import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { URL_BASE_FRONT } from '@Constants'
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
    <>
      <div className="w-full h-full">
        <div className="text-white w-full px-5 max-w-sm h-auto mx-auto mt-10 pb-10">
          <Image
            layout="responsive"
            src={`/Images/${isSuccess ? msg_sent : new_msg}.svg`}
            width="300"
            height="200"
            className={`${isSuccess && 'animate-fade-in'}`}
            alt={isSuccess ? msg_sent : new_msg}
          />
          <div>
            <p className="mt-6 mb-10 text-center text-black dark:text-white">
              👋 Hola, envíame un mensaje para contactarme
            </p>
          </div>
          <Form onSuccess={onSuccess} onLoading={onLoading} />
        </div>
      </div>
      <NextSeo
        title="Contactame | Luis Isasi"
        description="Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente Typescript, por este medio me puedes contactar, será un gusto comunicarme contigo 😀."
        canonical={URL_BASE_FRONT}
        twitter={{
          handle: '@handle',
          site: '@luis_isasi',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          url: URL_BASE_FRONT,
          title: 'Contactame | Luis Isasi',
          description:
            'Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente Typescript, por este medio me puedes contactar, será un gusto comunicarme contigo 😀.',
          site_name: 'Contactame | Luis Isasi',
          images: [
            {
              url: `${URL_BASE_FRONT}Images/luis-isasi.jpeg`,
              width: 640,
              height: 628,
              alt: 'Luis Isasi',
            },
          ],
        }}
      />
    </>
  )
}

export default contactme
