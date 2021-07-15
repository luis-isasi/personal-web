import { GetStaticProps } from 'next'

import { getBlogsPreview } from '@/mdx-utils'

export { default } from '@Views/Blog'

export const getStaticProps: GetStaticProps = async () => {
  const blogsPreviews = await getBlogsPreview()

  return {
    props: {
      blogsPreviews,
    },
  }
}
