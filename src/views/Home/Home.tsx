import { NextSeo } from 'next-seo'

import Wave from '@Components/Wave'
import Technologies from './components/Technologies'
import PresentingMe from './Sections/PresentingMe'
import RecentContent from './Sections/RecentContent'
import Categories from '@/src/views/Home/components/Categories'
import { Blog, Category } from '@Types'
import { URL_BASE_FRONT } from '@Constants'

const Home: React.FC<{
  recentsBlogs: Blog[]
  categories: Category[]
}> = ({ recentsBlogs, categories }) => {
  return (
    <>
      <NextSeo
        title="Home | Luis Isasi"
        description="Hola, Soy Luis Isasi un Front-end Developer con metas de ser Full Stack, convirtiendo ideas del mundo real a código usando principalmente Javascript y Typescript, Anhelo ser un buen developer para toda la comunidad y este sitio es uno de los pasos para lograrlo."
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
          title: 'Home | Luis Isasi',
          description:
            'Hola, Soy Luis Isasi un Front-end Developer con metas de ser Full Stack, convirtiendo ideas del mundo real a código usando principalmente Javascript y Typescript, Anhelo ser un buen developer para toda la comunidad y este sitio es uno de los pasos para lograrlo.',
          site_name: 'Home | Luis Isasi',
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
      <div className="w-full dark:bg-dark-primary">
        <div className="w-full h-auto bg-gradient-primary dark:bg-gradient-dark-sm dark:lg:bg-gradient-dark-lg">
          <div className="h-auto w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-5 md:pt-5 lg:pt-10 md:pb-0 lg:px-0 mx-auto xl:flex xl:justify-between">
            <PresentingMe />
            <Technologies />
          </div>
          <Wave className="text-white dark:text-dark-primary" />
        </div>
        <div className="h-auto w-full p-5 md:pt-5 md:pb-12 flex flex-col lg:flex-row lg:justify-between md:max-w-3xl lg:max-w-4xl xl:max-w-5xl lg:px-0 mx-auto">
          <RecentContent recentsBlogs={recentsBlogs} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}

export default Home
