import Link from '@Components/Links/Link'
import BtnDarkMode from '@Components/Buttons/BtnDarkMode'

const Nav = () => {
  return (
    <nav className="font-bold flex items-center">
      <Link href="/blog" className="p-2 mr-6">
        Blog
      </Link>
      <Link href="/snippets" className="p-2 mr-6">
        Snippets
      </Link>
      <Link href="/experimentos" className="p-2 mr-6">
        Experimentos
      </Link>
      <Link href="/aboutme" className="p-2 mr-6">
        Sobre mí
      </Link>
      <Link href="/contactame" className="p-2 mr-6">
        Contáctame
      </Link>
      <BtnDarkMode />
    </nav>
  )
}

export default Nav
