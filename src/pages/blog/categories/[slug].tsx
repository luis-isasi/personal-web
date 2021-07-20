import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllCategories, getBlogsByCategorie } from '@/mdx-utils'

export { default } from '@/src/views/Blog/BlogsByCategorie'

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories()

  const paths = categories.map(({ slug }) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorie = params?.slug
  const blogsByCategorie = await getBlogsByCategorie(categorie as string)
  return { props: { blogsByCategorie } }
}
