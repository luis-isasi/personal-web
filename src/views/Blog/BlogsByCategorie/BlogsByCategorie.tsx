import { Blog } from '@Types'
import PreviewBlog from '@/src/components/PreviewBlog'

const BlogsByCategorie: React.FC<{
  blogsByCategorie: Blog[]
  category: string
}> = ({ blogsByCategorie, category }) => {
  const renderBlogsByCategorie = () => {
    return blogsByCategorie.map(
      ({ title, contentPreview, createdAt, url }, i) => {
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
      }
    )
  }

  return (
    <div className="w-full dark:bg-dark-primary ">
      <div className="w-full mx-auto px-5 xl:px-0 py-6 md:py-10 sm:max-w-xl md:max-w-3xl">
        <h3 className="text-yellow-500 dark:text-yellow-400 lg:mb-10  text-center font-bold text-2xl md:text-3xl lg:text-4xl">
          {category === 'snippets' ? 'Snippets' : `Blogs de ${category}`}
        </h3>
        <ul>{renderBlogsByCategorie()}</ul>
      </div>
    </div>
  )
}

export default BlogsByCategorie
