import { NextSeo } from 'next-seo'

import PresentingMe from './sections/PresentingMe'
import AboutmeText from './sections/AboutmeText'
import { URL_BASE_FRONT } from '@Constants'

const Aboutme = () => {
  return (
    <>
      <NextSeo
        title="Sobre mí | Luis Isasi"
        description="Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente Typescript, Anhelo ser un buen developer para toda la comunidad y este sitio es uno de los pasos para lograrlo."
        //TODO: add url, example("https://luis-isasi.com")
        canonical={URL_BASE_FRONT}
        twitter={{
          handle: '@handle',
          site: '@luis_isasi',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          //TODO: add url, example("https://luis-isasi.com")
          url: URL_BASE_FRONT,
          title: 'Sobre mí | Luis Isasi',
          description:
            'Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente Typescript, Anhelo ser un buen developer para toda la comunidad y este sitio es uno de los pasos para lograrlo.',
          site_name: 'Sobre mí | Luis Isasi',
          images: [
            {
              //TODO: add image's url
              url: `${URL_BASE_FRONT}Image/opengraph.jpg`,
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
          <AboutmeText />
        </div>
      </div>
    </>
  )
}

export default Aboutme
