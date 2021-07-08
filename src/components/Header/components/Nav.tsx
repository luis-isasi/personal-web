import Link from '@Components/Links/Link'
import BtnDarkMode from '@Components/Buttons/BtnDarkMode'

const Nav = () => {
  return (
    <nav className="font-bold flex items-center">
      <Link
        href="/blog"
        className="p-2 mr-6 text-dark-light hover:text-dark dark:text-pink-500 dark:hover:text-pink-400"
      >
        Blog
      </Link>
      <Link
        href="/snippets"
        className="p-2 mr-6 text-dark-light hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Snippets
      </Link>
      <Link
        href="/experimentos"
        className="p-2 mr-6 text-dark-light hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Experimentos
      </Link>
      <Link
        href="/aboutme"
        className="p-2 mr-6 text-dark-light hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Sobre mí
      </Link>
      <Link
        href="/contactame"
        className="p-2 mr-6 text-dark-light hover:text-dark dark:text-pink-500 dark:hover:text-pink-600"
      >
        Contáctame
      </Link>
      <BtnDarkMode />
    </nav>
  )
}

export default Nav
