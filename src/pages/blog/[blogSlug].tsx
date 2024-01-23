import { GetStaticPaths, GetStaticProps } from 'next'
import { getBlogsSlug, getBlogBySlug } from '@/mdx-utils/blog'
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
  const blogSlug = params?.blogSlug as string
  const { blog, source } = await getBlogBySlug(blogSlug)

  return {
    props: {
      blog,
      source,
    },
  }
}
