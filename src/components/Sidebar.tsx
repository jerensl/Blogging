import Link from 'next/link'

interface Menu {
  sidenav: boolean
}

export const Sidebar = ({ sidenav }: Menu) => {
  return (
    <>
      <div className={sidenav ? 'grid items-center text-center' : 'hidden'}>
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
    </>
  )
}
