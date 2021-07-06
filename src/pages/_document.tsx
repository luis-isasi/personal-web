import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="scrool-none scroolbar bg-scroolbar-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
