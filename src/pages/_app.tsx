import '../styles/globals.css'
import { Navbar, CodeBlock, MarkdownLayout } from '../components'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAdjust,
  faLongArrowAltRight,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faAdjust,
  faLongArrowAltRight,
  faBars
)

const components = {
  code: CodeBlock,
  wrapper: MarkdownLayout,
}

declare global {
  interface Window {
    workbox: any
  }
}

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'ononline' in window &&
      'onoffline' in window
    ) {
      setIsOnline(window.navigator.onLine)
      if (!window.ononline) {
        window.addEventListener('online', () => {
          setIsOnline(true)
        })
      }
      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          setIsOnline(false)
        })
      }
    }
  }, [])

  const router = useRouter()
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined &&
      isOnline
    ) {
      // skip index route, because it's already cached under `start-url` caching object
      if (router.route !== '/') {
        const wb = window.workbox
        wb.active.then((worker: any) => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' })
        })
      }
    }
  }, [isOnline, router.route])

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={components}>
        <Navbar />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
