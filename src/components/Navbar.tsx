import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useMenu } from '../components/SideMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = (): React.ReactElement => {
  const { dispatch } = useMenu()

  return (
    <nav className="fixed z-10 dark:bg-gray-900 bg-gray-100 left-0 right-0 md:px-10 shadow">
      <div className="flex justify-between place-items-center min-w-max">
        {/* Mobile Nav */}
        <button
          className="block md:hidden p-4"
          onClick={() => dispatch({ type: 'on' })}
        >
          <FontAwesomeIcon className="text-xl" icon={['fas', 'bars']} />
        </button>

        {/* Logo */}
        <Link href="/">
          <a className="font-bold text-lg">Jerens</a>
        </Link>

        {/* Primary Nav */}
        <div className="hidden md:block space-x-3">
          <Link href="/">
            <a className="p-5 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="p-5 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="p-5 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
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
