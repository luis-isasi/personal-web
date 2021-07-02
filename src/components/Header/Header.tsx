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
    <header className="bg-green-400 dark:bg-black dark:text-white transition-all ease-in-out duration-500 w-full h-auto">
      <div className="h-14 w-full  px-5 flex justify-between items-center lg:mx-auto lg:max-w-6xl">
        <Link href="/">
          <h1 className="font-bold text-lg">Luis Isasi</h1>
        </Link>
        <div className="flex items-center">
          {isMovilAndTablet && (
            <button>
              <Menu />
            </button>
          )}
          {isLaptop && <Nav />}
          <button className=""></button>
        </div>
      </div>
    </header>
  )
}

export default Header
