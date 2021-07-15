import PreviewArticle from '@Components/PreviewArticle'
import { TypePreviewArticle } from '@Types'

interface Props {
  blogsPreviews: TypePreviewArticle[]
}

const BlogList: React.FC<Props> = ({ blogsPreviews }) => {
  const renderBlogsPreviews = () => {
    return blogsPreviews.map(
      ({ title, contentPreview, createdAt, url, slug, categories }, i) => {
        return (
          <li key={`${i}-${slug}`} className="">
            <PreviewArticle
              title={title}
              contentPreview={contentPreview}
              createdAt={createdAt}
              categories={categories}
              url={url}
            />
          </li>
        )
      }
    )
  }

  return (
    <div className="dark:bg-dark-light w-full ">
      <div className="w-full mx-auto px-5 xl:px-0 py-6 md:py-10 sm:max-w-xl md:max-w-3xl">
        <h3 className="text-yellow-500 dark:text-yellow-400 lg:mb-10  text-center font-bold text-2xl md:text-3xl lg:text-4xl">
          Listado de Blogs
        </h3>
        <ul>{renderBlogsPreviews()}</ul>
      </div>
    </div>
  )
}

export default BlogList
