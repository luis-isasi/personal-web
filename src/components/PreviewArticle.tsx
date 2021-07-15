import Link from '@Components/Links/Link'
import { TypePreviewArticle } from '@Types'

const PreviewArticle: React.FC<TypePreviewArticle> = ({
  title,
  contentPreview,
  createdAt,
  url,
}) => {
  return (
    <article className="rounded-md py-8">
      <header className="font-bold text-xl dark:text-white">{title}</header>
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

export default PreviewArticle
