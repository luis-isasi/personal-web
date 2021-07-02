import { useState, useEffect } from 'react'

interface Parameters {
  minMediaQuery?: number
  maxMediaQuery?: number
}

const useResponsive = ({
  minMediaQuery = undefined,
  maxMediaQuery = undefined,
}: Parameters) => {
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

  const validateScreen = () => {
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

    if (isScreen != screen) {
      setIsScreen(screen)
    }
  }

  return isScreen
}

export default useResponsive
