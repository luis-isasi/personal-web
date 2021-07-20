import { GetStaticProps } from 'next'
import { getPreviewRecentArticles, getAllCategories } from '@/mdx-utils'

export { default } from '@Views/Home'

export const getStaticProps: GetStaticProps = async () => {
  const recentsArticles = await getPreviewRecentArticles(3)
  const categories = await getAllCategories()

  return { props: { recentsArticles, categories } }
}
