import { GetStaticProps } from 'next'
import { getPreviewRecentArticles } from '@/mdx-utils'

export { default } from '@Views/Home'

export const getStaticProps: GetStaticProps = async () => {
  const recentsArticles = await getPreviewRecentArticles(3)

  return { props: { recentsArticles } }
}
