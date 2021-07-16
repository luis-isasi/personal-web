import Head from 'next/head'
import { TypeBlogDetail } from '@Types'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider, MDXProviderProps } from '@mdx-js/react'
import { H2, Blockquote, StaticCode } from '@Components/MdxComponents'
import CodeSnippet from '@/src/components/CodeSnippet'

const mdxComponents: MDXProviderProps['components'] = {
  h2: H2,
  blockquote: Blockquote,
  code: CodeSnippet,
}

const BlogDetail: React.FC<TypeBlogDetail> = ({ source, data }) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div className="w-full bg-white dark:bg-dark-light">
        <div className="w-full sm:max-w-xl px-5 py-4 lg:px-0 md:max-w-2xl xl:max-w-5xl h-auto mx-auto ">
          <MDXProvider components={mdxComponents}>
            <h3 className="text-black dark:text-yellow-400 font-bold text-center text-2xl lg:text-4xl pt-7 lg:pt-10 pb-4 lg:pb-8">
              {data.title}
            </h3>
            <div className="">
              <MDXRemote {...source} />
            </div>
          </MDXProvider>
        </div>
      </div>
    </>
  )
}

export default BlogDetail
