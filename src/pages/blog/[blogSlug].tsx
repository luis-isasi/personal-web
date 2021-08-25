import { GetStaticPaths, GetStaticProps } from 'next'
import { getBlogsSlug, getBlogBySlug } from '@/mdx-utils/blog'

//BlogDetail
export { default } from '@Views/Blog/BlogDetail'

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const blogsSlug = await getBlogsSlug()

  const paths: any[] = blogsSlug.map((blogSlug) => {
    return {
      params: {
        blogSlug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, source } = await getBlogBySlug(params?.blogSlug as string)

  return {
    props: {
      data,
      source,
    },
  }
}
