import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="scrool-none scroolbar bg-scroolbar-white">
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    )
  }
}
