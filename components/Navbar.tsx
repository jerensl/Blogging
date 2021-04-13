import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex h-1/10 px-20 justify-between place-items-center ">
      <h1 className="font-bold text-lg">
        <Link href="/">Jerens</Link>
      </h1>
      <ul className="flex space-x-12">
        <li className="font-semibold">
          <Link href="/">
            <a className="p-4">Home</a>
          </Link>
        </li>
        <li className="font-semibold">
          <Link href="/">
            <a className="p-4">Blog</a>
          </Link>
        </li>
        <li className="font-semibold">
          <Link href="/">
            <a className="p-4">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
