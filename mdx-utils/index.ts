import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'

import { Blog, TypePreviewArticle } from '@Types'

const Directory = join(process.cwd(), 'posts')

export const getAllBlogs = async () => {
  const DirectoryPosts = readdirSync(Directory)

  const blogs = DirectoryPosts.map((folder) => {
    const file = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(file)
    const { data } = matter(fileContent)

    return {
      ...data,
      slug: slugify(folder),
    }
  })

  return blogs as Blog[]
}

export const getBlogsPreview = () => {
  const DirectoryPosts = readdirSync(Directory)

  const previewArticle = DirectoryPosts.map((folder) => {
    const file = join(Directory, folder, 'index.mdx')
    const fileContent = readFileSync(file)
    const { data } = matter(fileContent)

    return {
      ...data,
      url: `/blog/${slugify(folder)}`,
    }
  })

  return previewArticle as TypePreviewArticle[]
}

export const getBlogsSlug = () => {
  const DirectoryPosts = readdirSync(Directory)

  const blogsSlug = DirectoryPosts.map((folder) => {
    return slugify(folder)
  })

  return blogsSlug
}

export const getBlogBySlug = (slug: string) => {
  const file = join(Directory, slug, 'index.mdx')
  const fileContent = readFileSync(file)
  const { data } = matter(fileContent)

  return {
    ...data,
  }
}
