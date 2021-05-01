import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ThemeSwitcher = (): React.ReactElement => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      className="py-3 px-3"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <FontAwesomeIcon className="h-6 w-6" icon={['fas', 'adjust']} />
    </button>
  )
}
