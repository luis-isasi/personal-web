import Head from 'next/head'

import PreviewBlog from '@/src/components/PreviewBlog'
import BtnCategorie from '@Views/Home/components/BtnCategorie'
import { Blog, Categorie } from '@Types'

interface Props {
  blogsPreviews: Blog[]
  categories: Categorie[]
}

const BlogList: React.FC<Props> = ({ blogsPreviews, categories }) => {
  const renderBlogsPreviews = () => {
    return blogsPreviews.map(({ title, contentPreview, createdAt, url }, i) => {
      return (
        <li key={`${i}-${title}`}>
          <PreviewBlog
            title={title}
            contentPreview={contentPreview}
            createdAt={createdAt}
            url={url}
          />
        </li>
      )
    })
  }

  const renderCategories = () => {
    return categories.map(({ name, url }, i) => {
      return <BtnCategorie key={`${i}-${name}`} url={url} name={name} />
    })
  }

  return (
    <>
      <Head>
        <title>Blog | Luis Isasi</title>
      </Head>
      <div className="dark:bg-dark-light w-full">
        <div className="w-full mx-auto px-5 xl:px-0 py-6 md:py-10 sm:max-w-xl md:max-w-3xl">
          <h3 className="text-yellow-500 dark:text-yellow-400 lg:mb-6  text-center font-bold text-2xl md:text-3xl lg:text-4xl">
            Listado de Blogs
          </h3>
          <div className="h-auto max-w-2xl mx-auto flex flex-col items-center mt-3 lg:mt-0">
            <p className="mb-1 text-sm font-bold dark:text-white">Categorias</p>
            <div className="flex flex-wrap justify-center">
              {renderCategories()}
            </div>
          </div>
          <ul>{renderBlogsPreviews()}</ul>
        </div>
      </div>
    </>
  )
}

export default BlogList
