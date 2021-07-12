import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ThemeSwitcher = (): React.ReactElement => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      className="h-10 w-10 rounded-full mr-5 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={handleClick}
    >
      {theme === 'light' ? (
        <FontAwesomeIcon className="text-2xl" icon={['fas', 'sun']} />
      ) : (
        <FontAwesomeIcon className="text-xl" icon={['fas', 'moon']} />
      )}
    </button>
  )
}
