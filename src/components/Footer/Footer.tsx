import Link from '@Components/Links/Link'

import SocialNetworks from '@Components/SocialNetworks'

const Footer = () => {
  return (
    <footer className="py-7 px-5 bg-gradient-primary dark:bg-gradient-dark-sm dark:lg:bg-gradient-dark-lg">
      <div className="lg:mx-auto lg:max-w-5xl flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <div className="flex flex-col lg:flex-row text-purple-600 dark:text-gray-400">
            <Link
              href="/blog"
              className="font-bold text-sm p-1 font my-1 lg:mr-7"
            >
              Blog
            </Link>
            <Link
              href="/blog/categories/snippets"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Snippets
            </Link>
            <Link
              href="/aboutme"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Sobre mí
            </Link>
            <Link
              href="/contactme"
              className="font-bold text-sm p-1 my-1 lg:mr-7"
            >
              Contáctame
            </Link>
          </div>
          <div className="mt-2 md:mt-0">
            <SocialNetworks />
          </div>
        </div>
        <div className="mt-7 lg:mt-0 text-center lg:text-right flex flex-col items-center dark:text-white">
          <h2 className="w-full text-xl md:text-2xl font-semibold">
            Luis Isasi
          </h2>
          <p className="font-semibold text-xs md:text-sm">
            ©2021 Luis Isasi - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
