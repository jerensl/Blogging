import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar = (): React.ReactElement => {
  return (
    <nav className="flex h-1/10 justify-between place-items-center">
      <Link href="/">
        <a className="font-bold text-lg">Jerens</a>
      </Link>
      <div className="space-y-4 md:space-x-12">
        <Link href="/">
          <a className="p-4 font-semibold">Home</a>
        </Link>
        <Link href="/blog">
          <a className="p-4 font-semibold">Blog</a>
        </Link>
        <Link href="/about">
          <a className="p-4 font-semibold">About</a>
        </Link>
      </div>
      <ThemeSwitcher />
    </nav>
  )
}
