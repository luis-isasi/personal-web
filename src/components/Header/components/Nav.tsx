import Link from '@Components/Links/Link'

const Nav = () => {
  return (
    <nav className="font-bold flex flex-col lg:flex-row lg:items-center">
      <Link
        href="/blog"
        className="p-2 mr-6 text-purple-400 lg:text-dark-light lg:hover:text-dark dark:text-pink-500 dark:hover:text-pink-400"
      >
        Blog
      </Link>
      <Link
        href="/snippets"
        className="p-2 mr-6 text-purple-400 lg:text-dark-light lg:hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Snippets
      </Link>
      <Link
        href="/experiments"
        className="p-2 mr-6 text-purple-400 lg:text-dark-light lg:hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Experimentos
      </Link>
      <Link
        href="/aboutme"
        className="p-2 mr-6 text-purple-400 lg:text-dark-light lg:hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Sobre mí
      </Link>
      <Link
        href="/contactme"
        className="p-2 mr-6 text-purple-400 lg:text-dark-light lg:hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Contáctame
      </Link>
    </nav>
  )
}

export default Nav
