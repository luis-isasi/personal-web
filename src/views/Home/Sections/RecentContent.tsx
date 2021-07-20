import { Blog } from '@Types'
import PreviewBlog from '@/src/components/PreviewBlog'

const RecentContent: React.FC<{ recentsBlogs: Blog[] }> = ({
  recentsBlogs,
}) => {
  const renderRecentsBlogs = () =>
    recentsBlogs.map(({ title, contentPreview, createdAt, url }, i) => (
      <PreviewBlog
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
      {renderRecentsBlogs()}
    </section>
  )
}

export default RecentContent
