import { GetStaticProps } from 'next'

import { getBlogsPreview } from '@/mdx-utils'

//BlogList
export { default } from '@Views/Blog/BlogList'

export const getStaticProps: GetStaticProps = async () => {
  const blogsPreviews = await getBlogsPreview()

  return {
    props: {
      blogsPreviews,
    },
  }
}
