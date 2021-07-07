import Link from '@Components/Links/Link'

const Footer = () => {
  return (
    <footer className="h-auto w-full  bg-green-400 px-5 py-7">
      <div className="h-auto w-full lg:mx-auto lg:max-w-5xl flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="">
          <div className="flex flex-col lg:flex-row">
            <Link
              href="/blog"
              className="font-bold text-sm p-1 font my-1 lg:mr-7"
            >
              Blog
            </Link>
            <Link
              href="/snippets"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Snippets
            </Link>
            <Link
              href="/experimentos"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Experimentos
            </Link>
            <Link
              href="/aboutme"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Sobre mí
            </Link>
          </div>
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row">
            <a
              href="https://www.google.com/"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Twitter
            </a>
            <a
              href="https://www.google.com/"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Instagram
            </a>
            <Link
              href="/contactame"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Contáctame
            </Link>
          </div>
        </div>
        <div className="mt-7 lg:mt-0 text-center flex flex-col  items-center">
          <h2 className="text-2xl font-semibold">Luis Isasi</h2>
          <p className="font-semibold text-sm">
            ©2021 Luis Isasi - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
