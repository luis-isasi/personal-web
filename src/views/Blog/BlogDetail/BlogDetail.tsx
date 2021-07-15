import Head from 'next/head'
import { TypeBlogDetail } from '@Types'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { H2 } from '@Components/MdxComponents'

const mdxComponents: MDXProviderComponentsProp = {
  h2: H2,
}

const BlogDetail: React.FC<TypeBlogDetail> = ({ source, data }) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div className="w-full bg-white dark:bg-dark-light">
        <div className="w-full sm:max-w-xl px-5 md:max-w-2xl xl:max-w-5xl   h-auto mx-auto">
          <MDXProvider components={mdxComponents}>
            <h2 className="dark:text-white font-bold text-center text-2xl lg:text-4xl pt-7 lg:pt-10 pb-4 lg:pb-8">
              {data.title}
            </h2>
            <MDXRemote {...source} />
          </MDXProvider>
        </div>
      </div>
    </>
  )
}

export default BlogDetail
