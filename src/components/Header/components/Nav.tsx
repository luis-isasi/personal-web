import Link from '@Components/Links/Link'

const itemClass =
  'p-2 mr-6 text-purple-400 text-left lg:text-dark-light lg:hover:text-dark dark:text-white dark:hover:text-gray-300 transition-colors ease-in-out duration-200'

const Nav: React.FC<{ handleModalNav?: () => void }> = ({ handleModalNav }) => {
  const handlerClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    handleModalNav && handleModalNav()
  }

  return (
    <nav className="font-bold flex flex-col lg:flex-row lg:items-center">
      <Link href="/" className={itemClass} onClick={handlerClick}>
        Home
      </Link>
      <Link href="/blog" className={itemClass} onClick={handlerClick}>
        Blog
      </Link>
      <Link
        href="/blog/categories/snippets"
        className={itemClass}
        onClick={handlerClick}
      >
        Snippets
      </Link>
      <Link href="/aboutme" className={itemClass} onClick={handlerClick}>
        Sobre mí
      </Link>
      <Link href="/contactme" className={itemClass} onClick={handlerClick}>
        Contáctame
      </Link>
    </nav>
  )
}

export default Nav
