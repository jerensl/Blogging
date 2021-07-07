import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import { Footer } from '../components'

const APP_NAME = 'Jerens App'
const APP_DESCRIPTION =
  "Hi I'm Jerens Lensun this app will cover topics such as designing good software especially on web development and backend"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Jerens Lensun</title>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta
            name="google-site-verification"
            content="IcqLpRy2zwKkTN1TlYABjrsUKoOOUp5sE5EQoMhrg_U"
          />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="IcqLpRy2zwKkTN1TlYABjrsUKoOOUp5sE5EQoMhrg_U"
          />
        </Head>

        <body className="container mx-auto md:px-10 text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
