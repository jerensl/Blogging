import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@headlessui/react'

export const ThemeSwitcher = (): React.ReactElement => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      className="p-7 md:p-4 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={handleClick}
    >
      {theme === 'light' ? (
        <FontAwesomeIcon className="text-2xl" icon={['fas', 'sun']} />
      ) : (
        <FontAwesomeIcon className="text-2xl" icon={['fas', 'moon']} />
      )}
    </button>
  )
}
