import { useState, useEffect } from 'react'
import _debounce from 'lodash/debounce'

import { MediaQuery } from '@Types'

interface Parameters {
  minMediaQuery?: MediaQuery
  maxMediaQuery?: MediaQuery
}

const useResponsive = ({ minMediaQuery, maxMediaQuery }: Parameters) => {
  const [isScreen, setIsScreen] = useState<undefined | boolean>(undefined)

  useEffect(() => {
    validateScreen()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', validateScreen)
    return () => {
      window.removeEventListener('resize', validateScreen)
    }
  }, [isScreen])

  const validateScreen = _debounce(() => {
    let widthScreen = window.innerWidth
    let screen

    if (minMediaQuery && !maxMediaQuery) {
      screen = widthScreen > minMediaQuery
    }

    if (maxMediaQuery && !minMediaQuery) {
      screen = widthScreen < maxMediaQuery
    }

    if (minMediaQuery && maxMediaQuery) {
      screen = widthScreen > minMediaQuery && widthScreen < maxMediaQuery
    }

    isScreen !== screen && setIsScreen(screen)
  }, 30)

  return isScreen
}

export default useResponsive
