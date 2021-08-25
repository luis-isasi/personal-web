import { readFileSync, readdirSync } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'

import { TypeBlogDetail, Blog, Category } from '@Types'

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
  let filteredCategories: Category[] = []

  DirectoryBlogs.forEach((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const file = readFileSync(filePath, 'utf-8')
    const { data } = matter(file)

    const fileCategories = data.categories.split(', ')
    categories = categories.concat(fileCategories)
  })

  categories.forEach((category, index) => {
    if (categories.indexOf(category) === index) {
      filteredCategories.push({
        name: category,
        url: `/blog/categories/${category}`,
        slug: slugify(category),
      })
    }
  })

  return filteredCategories as Category[]
}

export const getBlogsByCategorie = (category: string) => {
  const blogsByCategorie: Blog[] = []

  DirectoryBlogs.forEach((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    const categories: string[] = data.categories?.split(', ')

    if (categories.includes(category)) {
      const url = `/blog/${slugify(folder)}`
      const categoriesTemplate: Category[] = categories.map((value) => {
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
