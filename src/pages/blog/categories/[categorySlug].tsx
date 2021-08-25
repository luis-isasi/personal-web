import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllCategories } from '@/mdx-utils'
import { getBlogsByCategorie } from '@/mdx-utils/blog'

export { default } from '@/src/views/Blog/BlogsByCategorie'

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories()

  const paths = categories.map(({ slug: categorySlug }) => {
    return { params: { categorySlug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.categorySlug
  const blogsByCategorie = await getBlogsByCategorie(category as string)
  return { props: { blogsByCategorie, category } }
}
