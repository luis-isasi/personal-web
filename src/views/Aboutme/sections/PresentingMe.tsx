import Image from 'next/image'

import useResponsive from '@/src/hooks/useResponsive'
import SocialNetworks from '@Components/SocialNetworks'
import MyGmail from '../components/MyGmail'
import { MEDIAQUERY_MD } from '@Constants'

const PresentingMe = () => {
  const untilTablet = useResponsive({ maxMediaQuery: MEDIAQUERY_MD })

  return (
    <section className="w-full flex flex-col-reverse xl:flex-row items-center justify-between text-lg sm:text-xl md:text-2xl font-medium ">
      <div className="justify-between min-h-80 h-auto text-center sm:text-left flex flex-col items-center sm:items-start">
        <div />
        <div>
          Hola, soy
          <div className="font-bold text-4xl md:text-5xl my-1 mb-2">
            <h1>Luis Isasi Oyolo</h1>
            un{' '}
            <span className="text-blue-600 dark:text-blue-600">
              Ingeniero de Software
            </span>
          </div>
          enfocado en el Desarrollo Full Stack.
        </div>
        <div className="flex justify-between">
          <SocialNetworks />
        </div>
        <MyGmail />
      </div>
      <div className="px-10 sm:px-0">
        <Image
          layout="intrinsic"
          src="/Images/luis-isasi.jpeg"
          width={`${untilTablet ? '250' : '300'}`}
          height={`${untilTablet ? '250' : '300'}`}
          className="rounded-circle overflow-hidden"
          alt="Luis Isasi"
        />
      </div>
    </section>
  )
}

export default PresentingMe
