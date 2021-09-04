import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import '../../styles/globals.css'

import Layout from '@Components/Layout'
import { ContextThemeProvider } from '@Context/contextTheme'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <ContextThemeProvider>
      <Layout
        isConstruction={pageProps.isConstruction}
        pageNotFound={pageProps.pageNotFound}
      >
        <Component {...pageProps} />
        <div id="modal"></div>
      </Layout>
    </ContextThemeProvider>
  )
}
export default MyApp
