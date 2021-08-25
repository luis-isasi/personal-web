import { GetStaticProps } from 'next'

import { getAllCategories } from '@/mdx-utils'
import { getBlogsPreview } from '@/mdx-utils/blog'

//BlogList
export { default } from '@Views/Blog/BlogList'

export const getStaticProps: GetStaticProps = async () => {
  const blogsPreviews = await getBlogsPreview()
  const categories = await getAllCategories()

  return {
    props: {
      categories,
      blogsPreviews,
    },
  }
}
