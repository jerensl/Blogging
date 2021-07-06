import '../styles/globals.css'
import { Navbar, CodeBlock, MarkdownLayout, Sidebar } from '../components'
import { MenuProvider } from '../components/SideMenu'
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
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faAdjust,
  faLongArrowAltRight,
  faBars,
  faMoon,
  faSun
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
        <MenuProvider>
          <div className="relative">
            <Navbar />
            <Sidebar />
            <Component {...pageProps} />
          </div>
        </MenuProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
