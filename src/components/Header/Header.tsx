import Link from '@Components/Links/Link'

import useResponsive from '@Hooks/useResponsive'
import { MEDIAQUERY_LG } from '@Constants'
import Menu from '@Components/Icons/IconMenu'
import Nav from './components/Nav'

const Header = () => {
  const isMovilAndTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  })
  const isLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  })

  return (
    <header className="w-full h-auto text-pink-600 dark:text-pink-500  bg-gradient-to-r from-gradient-start to-gradient-end dark:from-dark-secondary dark:to-dark-secondary">
      <div className="h-14 w-full  px-5 lg:px-0 flex justify-between items-center lg:mx-auto lg:max-w-5xl">
        <Link href="/">
          <h1 className="font-bold text-2xl">Luis Isasi</h1>
        </Link>
        <div className="flex items-center">
          {isMovilAndTablet && (
            <button>
              <Menu />
            </button>
          )}
          {isLaptop && <Nav />}
        </div>
      </div>
    </header>
  )
}

export default Header
