import { NextSeo, ArticleJsonLd } from 'next-seo'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider, MDXProviderProps } from '@mdx-js/react'
import {
  H3,
  H4,
  H5,
  P,
  InlineCode,
  A,
  Li,
  Blockquote,
} from '@Components/MdxComponents'

import { TypeBlogDetail } from '@Types'

import CodeSnippet from '@/src/components/CodeSnippet'
import { URL_BASE_FRONT } from '@Constants'

const mdxComponents: MDXProviderProps['components'] = {
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  a: A,
  li: Li,
  inlineCode: InlineCode,
  code: CodeSnippet,
  blockquote: Blockquote,
}

const BlogDetail: React.FC<TypeBlogDetail> = ({ source, blog }) => {
  const { title, slug, contentPreview, createdAt, categories } = blog
  const url = `${URL_BASE_FRONT}blog/${slug}`

  return (
    <>
      <div className="w-full bg-white dark:bg-dark-primary">
        <div className="w-full h-auto mx-auto px-5 py-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:px-0 xl:max-w-4xl">
          <MDXProvider components={mdxComponents}>
            <h2 className="text-dark-light dark:text-white font-bold text-center text-2xl lg:text-4xl p-0 lg:py-8">
              {title}
            </h2>
            <div>
              <MDXRemote {...source} />
            </div>
          </MDXProvider>
        </div>
      </div>
      <NextSeo
        title={`${title} | Luis Isasi`}
        canonical={url}
        description={contentPreview}
        openGraph={{
          title,
          description: contentPreview,
          url,
          type: 'article',
          article: {
            publishedTime: createdAt,
            modifiedTime: createdAt,
            authors: [URL_BASE_FRONT],
            tags: categories?.map((c) => c.name) || [],
          },
          images: [
            {
              url: `${URL_BASE_FRONT}Images/opengraph.jpg`,
              width: 640,
              height: 628,
              alt: 'Luis Isasi',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@luis_isasi',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        title={title}
        url={url}
        images={[`${URL_BASE_FRONT}Images/opengraph.jpg`]}
        datePublished={createdAt}
        dateModified={createdAt}
        authorName="Luis Isasi"
        publisherName="Luis Isasi"
        publisherLogo={`${URL_BASE_FRONT}Images/opengraph.jpg`}
        description={contentPreview}
      />
    </>
  )
}

export default BlogDetail
