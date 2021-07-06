import Link from 'next/link'
import { useMenu } from '../components/SideMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Sidebar = () => {
  const { state, dispatch } = useMenu()

  return (
    <>
      {state.toggle === true ? (
        <div className="fixed z-50 top-0 left-0 w-3/6 bg-gray-100 dark:bg-gray-900 flex flex-col text-center h-screen shadow-xl">
          <button
            className="px-4 py-4 rounded"
            onClick={() => dispatch({ type: 'off' })}
          >
            <FontAwesomeIcon className="h-6 w-6" icon={['fas', 'times']} />
          </button>
          <Link href="/">
            <a
              onClick={() => dispatch({ type: 'off' })}
              className="px-14 py-5 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a
              onClick={() => dispatch({ type: 'off' })}
              className="px-14 py-5 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={() => dispatch({ type: 'off' })}
              className="px-14 py-5 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              About
            </a>
          </Link>
        </div>
      ) : null}
    </>
  )
}
