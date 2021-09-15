import Head from 'next/head'

import Wave from '@Components/Wave'
import Technologies from './components/Technologies'
import PresentingMe from './Sections/PresentingMe'
import RecentContent from './Sections/RecentContent'
import Categories from '@/src/views/Home/components/Categories'
import { Blog, Category } from '@Types'

const Home: React.FC<{
  recentsBlogs: Blog[]
  categories: Category[]
}> = ({ recentsBlogs, categories }) => {
  return (
    <>
      <Head>
        <title>Home | Luis Isasi</title>
      </Head>
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
