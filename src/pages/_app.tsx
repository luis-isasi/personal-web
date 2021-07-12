import type { AppProps } from 'next/app'
import '../../styles/globals.css'

import Layout from '@Components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      isConstruction={pageProps.isConstruction}
      pageNotFound={pageProps.pageNotFound}
    >
      <Component {...pageProps} />
      <div id="modal"></div>
    </Layout>
  )
}
export default MyApp
