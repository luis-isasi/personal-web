import { NextSeo } from 'next-seo'

import PresentingMe from './sections/PresentingMe'
import AboutMeText from './sections/AboutMeText'
import Skills from './sections/Skills'
import { URL_BASE_FRONT } from '@Constants'

const Aboutme = () => {
  return (
    <>
      <NextSeo
        title="Sobre mí | Luis Isasi"
        description="Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente Typescript, Anhelo ser un buen developer para toda la comunidad y este sitio es uno de los pasos para lograrlo."
        canonical={URL_BASE_FRONT}
        twitter={{
          handle: '@handle',
          site: '@luis_isasi',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          url: URL_BASE_FRONT,
          title: 'Sobre mí | Luis Isasi',
          description:
            'Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente Typescript, Anhelo ser un buen developer para toda la comunidad y este sitio es uno de los pasos para lograrlo.',
          site_name: 'Sobre mí | Luis Isasi',
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
      <div className="h-full mx-auto w-full max-w-7xl flex flex-col items-center dark:text-white px-5">
        <div className="w-full mt-10 md:mt-20 mb-20 md:mb-30">
          <PresentingMe />
        </div>
        <div className="w-full mb-10">
          <AboutMeText />
          <Skills />
        </div>
      </div>
    </>
  )
}

export default Aboutme
