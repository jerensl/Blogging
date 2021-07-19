import Link from 'next/link'

interface NavbarProps {
  leftSide: React.ReactElement
  rightSide: React.ReactElement
}

export const Navbar = ({
  leftSide,
  rightSide,
}: NavbarProps): React.ReactElement => {
  return (
    <>
      <nav className="fixed z-10 dark:dark-theme bg-gray-100 left-0 right-0 md:px-10 shadow">
        <div className="flex justify-between place-items-center min-w-max">
          {/* Mobile Nav */}
          {leftSide}

          {/* Logo */}
          <Link href="/">
            <a className="font-bold text-2xl">Jerens</a>
          </Link>

          {/* Primary Nav */}
          <div className="hidden md:flex space-x-3">
            <Link href="/">
              <a className="p-5 font-semibold hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-5">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a className="p-5 font-semibold hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-5">
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a className="p-5 font-semibold hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-5">
                About
              </a>
            </Link>
          </div>
          {/* Secondary Nav */}
          {rightSide}
        </div>
      </nav>
    </>
  )
}
