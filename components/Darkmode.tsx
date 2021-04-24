import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'

export const DarkMode = (): React.ReactElement => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      className="py-3 px-3"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && theme ? (
        <SunIcon className="h-7 w-7" />
      ) : (
        <SunIcon className="h-7 w-7" />
      )}
    </button>
  )
}
