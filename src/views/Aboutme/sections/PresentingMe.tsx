import Image from 'next/image'

import SocialNetworks from '../components/SocialNetworks'

const PresentingMe = () => {
  return (
    <section className="w-full flex items-center justify-between text-2xl font-medium ">
      <div className="flex flex-col justify-between h-76">
        <div />
        <div>
          Hola, soy
          <div className="font-bold text-6xl my-1 mb-2">
            <h1>Luis Isasi Oyolo</h1>
            un{' '}
            <span className="text-blue-600 dark:text-blue-600">
              Frontend development
            </span>
          </div>
          enfocado en sitios webs.
        </div>
        <div className="flex justify-between">
          <SocialNetworks />
        </div>
      </div>
      <Image
        layout="intrinsic"
        src="/Images/luis-isasi.jpeg"
        width="300"
        height="300"
        className="rounded-circle overflow-hidden"
      />
    </section>
  )
}

export default PresentingMe
