import '../styles/globals.css'
import { Navbar } from '../components'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }): React.ReactElement {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
