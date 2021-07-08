import dynamic from 'next/dynamic'

import Link from '@Components/Links/Link'

import useResponsive from '@Hooks/useResponsive'
import { MEDIAQUERY_LG } from '@Constants'
import Nav from './components/Nav'
import BtnMenu from './components/BtnMenu'

const BtnDarkMode = dynamic(() => import('@Components/Buttons/BtnDarkMode'))

const Header = () => {
  const isMovilAndTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  })
  const isLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  })

  return (
    <header className="w-full h-auto bg-gradient-to-r from-gradient-start to-gradient-end dark:from-dark-secondary dark:to-dark-secondary">
      <div className="h-14 w-full px-5 lg:px-0 flex justify-between flex-row-reverse lg:flex-row items-center md:mx-auto md:max-w-3xl lg:max-w-5xl">
        {isMovilAndTablet && <BtnDarkMode />}
        <Link href="/">
          <h1 className="font-bold text-2xl text-center text-dark-light hover:text-dark dark:text-pink-500 dark:hover:text-pink-600">
            Luis Isasi
          </h1>
        </Link>
        <div className="flex items-center">
          {isMovilAndTablet && <BtnMenu />}
          {isLaptop && (
            <>
              <Nav />
              <BtnDarkMode />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
