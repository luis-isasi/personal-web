import Link from '@Components/Links/Link'
import { Blog } from '@Types'

const PreviewBlog: React.FC<Blog> = ({
  title,
  contentPreview,
  createdAt,
  url,
  categories,
  slug,
}) => {
  return (
    <article className="rounded-md py-8 text-dark-light group">
      <header className="font-bold text-xl xl:text-2xl dark:text-white group-hover:text-indigo-600 dark:group-hover:text-pink-600 transition-colors ease-in-out duration-150">
        {title}
      </header>
      <time className="text-sm font-bold text-gray-400 dark:text-gray-500">
        {createdAt}
      </time>
      <p className="py-3 dark:text-white">{contentPreview}</p>
      <Link
        href={url}
        className="rounded-md py-1 px-2 bg-blue-700 text-white font-bold hover:bg-blue-600  transition-all ease-in-out duration-150"
      >
        Leer más
      </Link>
    </article>
  )
}

export default PreviewBlog
