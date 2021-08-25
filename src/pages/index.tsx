import { GetStaticProps } from 'next'
import { getAllCategories } from '@/mdx-utils'
import { getBlogsPreview } from '@/mdx-utils/blog'

export { default } from '@Views/Home'

export const getStaticProps: GetStaticProps = async () => {
  const recentsBlogs = await getBlogsPreview(3)
  const categories = await getAllCategories()

  return { props: { recentsBlogs, categories } }
}
