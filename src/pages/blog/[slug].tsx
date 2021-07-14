import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllBlogs, getBlogsSlug, getBlogBySlug } from '@/mdx-utils'

const BlogDetail: React.FC = (props) => {
  console.log({ props })

  return <div></div>
}

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
  const blog = await getBlogBySlug(slug)

  return {
    props: {
      blog,
    },
  }
}

export default BlogDetail
