import type { AppProps } from 'next/app'
import '../../styles/globals.css'

import Layout from '@Components/Layout'
import { ContextThemeProvider } from '@Context/contextTheme'

function MyApp({ Component, pageProps }: AppProps) {
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
