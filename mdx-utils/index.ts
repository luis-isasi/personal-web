import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'

import { Blog, Category } from '@Types'

const Directory = join(process.cwd(), 'blogs')
const DirectoryBlogs = readdirSync(Directory)

export const orderPreviewBlogsByDate = (previewBlogs: Blog[]) =>
  previewBlogs.sort((a, b) => {
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
