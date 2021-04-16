import '../styles/globals.css'
import { Navbar, CodeBlock, MarkdownLayout } from '../components'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import { MDXProviderProps } from '@mdx-js/react'

const components = {
  code: CodeBlock,
  wrapper: MarkdownLayout,
  h1: (props: MDXProviderProps) => (
    <h1 style={{ color: '#333333' }} {...props} />
  ),
  p: (props: MDXProviderProps) => <p style={{ color: '#333333' }} {...props} />,
}

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>
        <Navbar />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
