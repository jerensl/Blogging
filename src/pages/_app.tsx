import '../styles/globals.css'
import { Navbar, CodeBlock, MarkdownLayout } from '../components'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

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

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
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
