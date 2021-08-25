import { GetStaticPaths, GetStaticProps } from 'next'
import { getBlogsSlug, getBlogBySlug } from '@/mdx-utils/blog'

//BlogDetail
export { default } from '@Views/Blog/BlogDetail'

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const blogsSlug = await getBlogsSlug()

  //TODO: refactoring
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
