import Link from '@Components/Links/Link'
import useResponsive from '@Hooks/useResponsive'
import { MEDIAQUERY_LG } from '@Constants'
import Menu from '@Components/Icons/Menu'

const Header = () => {
  const isMovilAndTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  })
  const isLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  })

  return (
    <header className="h-14 w-full px-5 flex justify-between items-center lg:mx-auto lg:max-w-6xl">
      <h1 className="font-bold">Luis Isasi</h1>
      <div className="flex items-center">
        {isMovilAndTablet && (
          <button>
            <Menu />
          </button>
        )}
        {isLaptop && (
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
        )}
        <button className=""></button>
      </div>
    </header>
  )
}

export default Header
