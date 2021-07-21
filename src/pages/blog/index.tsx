import { GetStaticProps } from 'next'

import { getBlogsPreview, getAllCategories } from '@/mdx-utils'

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
