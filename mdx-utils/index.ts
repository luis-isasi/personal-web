import { readFileSync, readdirSync } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'

import { TypeBlogDetail, Blog, Categorie } from '@Types'

const Directory = join(process.cwd(), 'blogs')
const DirectoryBlogs = readdirSync(Directory)

export const getBlogsPreview = () => {
  const previewBlogs = DirectoryBlogs.map((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      ...data,
      url: `/blog/${slugify(folder)}`,
    }
  })

  return previewBlogs as Blog[]
}

export const getBlogsSlug = () => {
  const blogsSlug = DirectoryBlogs.map((folder) => {
    return slugify(folder)
  })

  return blogsSlug
}

export const getBlogBySlug = async (slug: string) => {
  const filePath = join(Directory, slug, 'index.mdx')
  const fileContent = readFileSync(filePath, 'utf-8')
  const { content, data } = matter(fileContent)

  const mdxSource = await serialize(content, { scope: data })

  return {
    source: mdxSource,
    data,
  } as TypeBlogDetail
}

export const getAllCategories = async () => {
  let categories: string[] = []
  let filteredCategories: Categorie[] = []

  DirectoryBlogs.forEach((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const file = readFileSync(filePath, 'utf-8')
    const { data } = matter(file)

    const fileCategories = data.categories.split(', ')
    categories = categories.concat(fileCategories)
  })

  categories.forEach((categorie, index) => {
    if (categories.indexOf(categorie) === index) {
      filteredCategories.push({
        name: categorie,
        url: `/blog/categories/${categorie}`,
        slug: slugify(categorie),
      })
    }
  })

  return filteredCategories as Categorie[]
}

export const getBlogsByCategorie = (categorie: string) => {
  const blogsByCategorie: Blog[] = []

  DirectoryBlogs.forEach((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    const categories: string[] = data.categories?.split(', ')

    if (categories.includes(categorie)) {
      const url = `/blog/${slugify(folder)}`
      const categoriesTemplate: Categorie[] = categories.map((value) => {
        return {
          name: value,
          url: `/blog/categories/${value}`,
          slug: slugify(value),
        }
      })

      blogsByCategorie.push({
        ...data,
        categories: categoriesTemplate,
        url,
      } as Blog)
    } else return
  })

  return blogsByCategorie
}

export const getPreviewRecentBlogs = async (numberOfBlogs: number) => {
  const DirectoryRecentBlogs = readdirSync(Directory).slice(0, numberOfBlogs)

  const recentsBlogs = DirectoryRecentBlogs.map((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    const previewBlog = { ...data, url: `/blog/${slugify(folder)}` }

    return previewBlog as Blog
  })

  //order by date
  recentsBlogs.sort((a, b) => {
    const [yearA, monthA, dayA] = a.createdAt.split('/').reverse()
    const [yearB, monthB, dayB] = b.createdAt.split('/').reverse()

    const timeA = new Date(
      parseInt(yearA),
      parseInt(monthA),
      parseInt(dayA)
    ).getTime()

    const timeB = new Date(
      parseInt(yearB),
      parseInt(monthB),
      parseInt(dayB)
    ).getTime()

    return timeB - timeA
  })

  return recentsBlogs as Blog[]
}
