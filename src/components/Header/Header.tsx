import Link from '@Components/Links/Link'
import useResponsive from '@Hooks/useResponsive'

const Header = () => {
  return (
    <header className="h-14 w-full flex justify-between items-center lg:mx-auto lg:max-w-6xl">
      <h1 className="font-bold">Luis Isasi</h1>
      <div className="flex items-center">
        <nav className="bg-blue-400">
          <Link href="/blog" className="mr-8">
            Blog
          </Link>
          <Link href="/snippets" className="mr-8">
            Snippets
          </Link>
          <Link href="/experimentos" className="mr-8">
            Experimentos
          </Link>
          <Link href="/aboutme" className="mr-8">
            Sobre mí
          </Link>
          <Link href="/contactame" className="mr-8">
            Contáctame
          </Link>
        </nav>
        <button className=""></button>
      </div>
    </header>
  )
}

export default Header
