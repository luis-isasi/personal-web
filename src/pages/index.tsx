import { GetStaticProps } from 'next'
import { getPreviewRecentBlogs, getAllCategories } from '@/mdx-utils'

export { default } from '@Views/Home'

export const getStaticProps: GetStaticProps = async () => {
  const recentsBlogs = await getPreviewRecentBlogs(3)
  const categories = await getAllCategories()

  return { props: { recentsBlogs, categories } }
}
