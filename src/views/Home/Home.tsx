import Head from 'next/head'

import Wave from '@Components/Wave'
import Technologies from './components/Technologies'
import PresentingMe from './Sections/PresentingMe'
import RecentContent from './Sections/RecentContent'
import Categories from './components/Categories'
import { TypePreviewArticle, Categorie } from '@Types'

const Home: React.FC<{
  recentsArticles: TypePreviewArticle[]
  categories: Categorie[]
}> = ({ recentsArticles, categories }) => {
  return (
    <>
      <Head>
        <title>Home | Luis Isasi</title>
      </Head>
      <div className="w-full dark:bg-dark-secondary">
        <div className="w-full h-auto bg-gradient-to-r from-gradient-start to-gradient-end dark:from-dark-light dark:to-dark-light">
          <div className="h-auto w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-5 md:pt-5 lg:pt-10 md:pb-0 lg:px-0 mx-auto xl:flex xl:justify-between">
            <PresentingMe />
            <Technologies />
          </div>
          <Wave className="text-white dark:text-dark-secondary" />
        </div>
        <div className="h-auto w-full p-5 md:pt-5 md:pb-12 flex flex-col lg:flex-row lg:justify-between md:max-w-3xl lg:max-w-4xl xl:max-w-5xl lg:px-0 mx-auto">
          <RecentContent recentsArticles={recentsArticles} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}

export default Home
