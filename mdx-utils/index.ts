import { readFileSync, readdirSync } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'

import { Blog, TypeBlogDetail, TypePreviewBlog, Categorie } from '@Types'

const Directory = join(process.cwd(), 'blogs')

export const getAllBlogs = async () => {
  const DirectoryBlogs = readdirSync(Directory)

  const blogs = DirectoryBlogs.map((folder) => {
    const file = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(file, 'utf-8')
    const { data } = matter(fileContent)

    return {
      ...data,
      slug: slugify(folder),
    }
  })

  return blogs as Blog[]
}

export const getBlogsPreview = () => {
  const DirectoryBlogs = readdirSync(Directory)

  const previewBlogs = DirectoryBlogs.map((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      ...data,
      url: `/blog/${slugify(folder)}`,
    }
  })

  return previewBlogs as TypePreviewBlog[]
}

export const getBlogsSlug = () => {
  const DirectoryBlogs = readdirSync(Directory)

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

export const getPreviewRecentBlogs = async (numberOfBlogs: number) => {
  const DirectoryRecentBlogs = readdirSync(Directory).slice(0, numberOfBlogs)

  const recentsBlogs = DirectoryRecentBlogs.map((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    const previewBlog = { ...data, url: `/blog/${slugify(folder)}` }

    return previewBlog as TypePreviewBlog
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

  return recentsBlogs as TypePreviewBlog[]
}

export const getAllCategories = async () => {
  const DirectoryBlogs = readdirSync(Directory)

  let categories: string[] = []
  let filteredCategories: Categorie[] = []

  DirectoryBlogs.forEach((folder) => {
    const filePath = join(Directory, folder, 'index.mdx')
    const file = readFileSync(filePath, 'utf-8')
    const { data } = matter(file)

    const fileCategories = data.categories.split('-')
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
