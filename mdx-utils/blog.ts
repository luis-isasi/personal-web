import { readFileSync, readdirSync } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'

import { TypeBlogDetail, Blog, Category } from '@Types'
import { orderPreviewBlogsByDate } from './index'

const Directory = join(process.cwd(), 'blogs')
const DirectoryBlogs = readdirSync(Directory)

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

  const categories: string[] = data.categories?.split(', ')
  const categoriesTemplate: Category[] = categories.map((value) => {
    return {
      name: value,
      url: `/blog/categories/${value}`,
      slug: slugify(value),
    }
  })

  const mdxSource = await serialize(content, { scope: data })

  return {
    source: mdxSource,
    blog: { ...data, categories: categoriesTemplate, slug },
  } as TypeBlogDetail
}

export const getBlogsByCategory = (category: string) => {
  const blogsByCategory: Blog[] = []

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

      blogsByCategory.push({
        ...data,
        categories: categoriesTemplate,
        url,
      } as Blog)
    } else return
  })

  return blogsByCategory
}

export const getBlogsPreview = async (numberOfBlogs?: number) => {
  let DirectoryRecentBlogs

  if (numberOfBlogs) {
    DirectoryRecentBlogs = readdirSync(Directory).slice(0, numberOfBlogs)
  } else {
    DirectoryRecentBlogs = readdirSync(Directory)
  }

  const recentsBlogs = DirectoryRecentBlogs.map((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    const previewBlog = { ...data, url: `/blog/${slugify(folder)}` }

    return previewBlog as Blog
  })

  return orderPreviewBlogsByDate(recentsBlogs)
}
