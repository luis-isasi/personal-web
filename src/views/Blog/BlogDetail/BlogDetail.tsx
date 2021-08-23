import Head from 'next/head'
import { TypeBlogDetail } from '@Types'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider, MDXProviderProps } from '@mdx-js/react'
import { H3, H4, H5, P, InlineCode, A } from '@Components/MdxComponents'
import CodeSnippet from '@/src/components/CodeSnippet'

const mdxComponents: MDXProviderProps['components'] = {
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  a: A,
  inlineCode: InlineCode,
  code: CodeSnippet,
}

const BlogDetail: React.FC<TypeBlogDetail> = ({ source, data }) => {
  return (
    <>
      <Head>
        <title>{`${data.title} | Luis Isasi`}</title>
      </Head>
      <div className="w-full bg-white dark:bg-dark-light">
        <div className="w-full h-auto mx-auto px-5 py-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:px-0 xl:max-w-4xl">
          <MDXProvider components={mdxComponents}>
            <h2 className="text-dark-light dark:text-white font-bold text-center text-2xl lg:text-4xl p-0 lg:py-8">
              {data.title}
            </h2>
            <div>
              <MDXRemote {...source} />
            </div>
          </MDXProvider>
        </div>
      </div>
    </>
  )
}

export default BlogDetail
