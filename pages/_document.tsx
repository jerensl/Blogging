import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
