import { NextSeo } from 'next-seo'

import { Blog } from '@Types'
import { URL_BASE_FRONT } from '@Constants'
import PreviewBlog from '@/src/components/PreviewBlog'

const BlogsByCategorie: React.FC<{
  blogsByCategorie: Blog[]
  category: string
}> = ({ blogsByCategorie, category }) => {
  const renderBlogsByCategorie = () => {
    return blogsByCategorie.map(
      ({ title, contentPreview, createdAt, url }, i) => (
        <li key={`${i}-${title}`}>
          <PreviewBlog
            title={title}
            contentPreview={contentPreview}
            createdAt={createdAt}
            url={url}
          />
        </li>
      )
    )
  }

  const seoTitle = `Blogs de ${category} | Luis Isasi`

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={`Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente typescript, te presento mis blogs de ${category}.`}
        canonical={URL_BASE_FRONT}
        twitter={{
          handle: '@handle',
          site: '@luis_isasi',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          url: URL_BASE_FRONT,
          title: seoTitle,
          description: `Hola, Soy Luis Isasi un Front-end Developer, convirtiendo ideas del mundo real a código usando principalmente typescript, te presento mis blogs de ${category}.`,
          site_name: seoTitle,
          images: [
            {
              url: `${URL_BASE_FRONT}Images/opengraph.jpg`,
              width: 640,
              height: 628,
              alt: 'Luis Isasi',
            },
          ],
        }}
      />
      <div className="w-full dark:bg-dark-primary ">
        <div className="w-full mx-auto px-5 xl:px-0 py-6 md:py-10 sm:max-w-xl md:max-w-3xl">
          <h3 className="text-yellow-500 dark:text-yellow-400 lg:mb-10  text-center font-bold text-2xl md:text-3xl lg:text-4xl">
            {category === 'snippets' ? 'Snippets' : `Blogs de ${category}`}
          </h3>
          <ul>{renderBlogsByCategorie()}</ul>
        </div>
      </div>
    </>
  )
}

export default BlogsByCategorie
