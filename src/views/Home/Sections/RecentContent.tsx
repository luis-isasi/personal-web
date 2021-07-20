import { TypePreviewArticle } from '@Types'
import PreviewArticle from '@Components/PreviewArticle'

const RecentContent: React.FC<{ recentsArticles: TypePreviewArticle[] }> = ({
  recentsArticles,
}) => {
  const renderArticle = () =>
    recentsArticles.map(({ title, contentPreview, createdAt, url }, i) => (
      <PreviewArticle
        key={`${i}-${title}`}
        title={title}
        contentPreview={contentPreview}
        createdAt={createdAt}
        url={url}
      />
    ))

  return (
    <section className="w-full lg:max-w-2xl">
      <p className="text-sm font-bold py-5 text-pink-500">
        CONTENIDO RECIENTE:
      </p>
      {renderArticle()}
    </section>
  )
}

export default RecentContent
