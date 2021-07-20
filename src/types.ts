import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import {
  MEDIAQUERY_SM,
  MEDIAQUERY_MD,
  MEDIAQUERY_LG,
  MEDIAQUERY_XL,
  MEDIAQUERY_2X1,
  DARK,
  LIGHT,
} from '@Constants'

//Media Query
export type MediaQuery =
  | typeof MEDIAQUERY_SM
  | typeof MEDIAQUERY_MD
  | typeof MEDIAQUERY_LG
  | typeof MEDIAQUERY_XL
  | typeof MEDIAQUERY_2X1

//theme
export type Theme = typeof DARK | typeof LIGHT

//user settings
export type UserSettings = {
  theme: Theme
}

//Post
export interface Blog {
  title: string
  contentPreview: string
  createdAt: string
  slug?: string
  categories?: string
}

export interface TypeBlogDetail {
  source: MDXRemoteSerializeResult
  data: Blog
}
export interface TypePreviewBlog {
  title: string
  contentPreview: string
  createdAt: string
  url: string
}

export interface Categorie {
  name: string
  url: string
}
