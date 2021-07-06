import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useMenu } from '../components/SideMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = (): React.ReactElement => {
  const { dispatch } = useMenu()

  return (
    <nav className="fixed z-10 dark:bg-gray-900 bg-gray-100 left-0 right-0 px-10 shadow">
      <div className="flex justify-between place-items-center min-h-1/10">
        {/* Mobile Nav */}
        <button
          className="block md:hidden px-2 py-2"
          onClick={() => dispatch({ type: 'on' })}
        >
          <FontAwesomeIcon className="h-6 w-6" icon={['fas', 'bars']} />
        </button>

        {/* Logo */}
        <Link href="/">
          <a className="font-bold text-lg">Jerens</a>
        </Link>

        {/* Primary Nav */}
        <div className="hidden md:block  space-x-3">
          <Link href="/">
            <a className="p-4 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="p-4 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="p-4 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
              About
            </a>
          </Link>
        </div>
        {/* Secondary Nav */}
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
