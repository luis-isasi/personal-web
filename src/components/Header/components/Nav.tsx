import Link from '@Components/Links/Link'

const itemClass =
  'p-2 mr-6 text-purple-400 lg:text-dark-light lg:hover:text-dark dark:text-white dark:hover:text-gray-300 transition-colors ease-in-out duration-200'

const Nav = () => {
  return (
    <nav className="font-bold flex flex-col lg:flex-row lg:items-center">
      <Link href="/blog" className={itemClass}>
        Blog
      </Link>
      <Link href="/snippets" className={itemClass}>
        Snippets
      </Link>
      <Link href="/experiments" className={itemClass}>
        Experimentos
      </Link>
      <Link href="/aboutme" className={itemClass}>
        Sobre mí
      </Link>
      <Link href="/contactme" className={itemClass}>
        Contáctame
      </Link>
    </nav>
  )
}

export default Nav
