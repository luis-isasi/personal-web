import { GetStaticPaths, GetStaticProps } from 'next'
import { getBlogsSlug, getBlogBySlug } from '@/mdx-utils'

//BlogDetail
export { default } from '@Views/Blog/BlogDetail'

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const blogsSlug = await getBlogsSlug()

  const paths: any[] = []

  blogsSlug.forEach((value) => {
    paths.push({
      params: {
        slug: value,
      },
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const { data, source } = await getBlogBySlug(slug)

  return {
    props: {
      data,
      source,
    },
  }
}
