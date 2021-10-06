import { NextSeo } from 'next-seo'

import PreviewBlog from '@/src/components/PreviewBlog'
import BtnCategorie from '@Views/Home/components/BtnCategorie'
import { Blog, Category } from '@Types'
import { URL_BASE_FRONT } from '@Constants'

interface Props {
  blogsPreviews: Blog[]
  categories: Category[]
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
      <NextSeo
        title="List de Blogs | Luis Isasi"
        description="Hola, Soy Luis Isasi un Front-end Developer con metas de ser Full Stack, convirtiendo ideas del mundo real a código usando principalmente Javascript y Typescript, te presento mi lista de blogs, espero sea de tu agrado."
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
          title: 'List de Blogs | Luis Isasi',
          description:
            'Hola, Soy Luis Isasi un Front-end Developer con metas de ser Full Stack, convirtiendo ideas del mundo real a código usando principalmente Javascript y Typescript, te presento mi lista de blogs, espero sea de tu agrado.',
          site_name: 'List de Blogs | Luis Isasi',
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
      <div className="dark:bg-dark-primary w-full">
        <div className="w-full mx-auto px-5 xl:px-0 py-6 md:py-10 sm:max-w-xl md:max-w-3xl">
          <h3 className="text-yellow-500 dark:text-yellow-400 lg:mb-6  text-center font-bold text-2xl md:text-3xl lg:text-4xl">
            Listado de Blogs
          </h3>
          <div className="h-auto max-w-2xl mx-auto flex flex-col items-center mt-3 lg:mt-0">
            <p className="mb-1 text-sm font-bold dark:text-white">Categorías</p>
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
