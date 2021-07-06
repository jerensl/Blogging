import Link from 'next/link'
import { useEffect } from 'react'
import { useMenu } from '../components/SideMenu'

export const Sidebar = () => {
  const { state, dispatch } = useMenu()

  useEffect(() => dispatch({ type: 'off' }), [])

  return (
    <>
      <div
        className={
          state.toggle === true ? 'grid items-center text-center' : 'hidden'
        }
      >
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
