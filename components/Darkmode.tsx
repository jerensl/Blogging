import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon } from '@heroicons/react/solid'

export const DarkMode = (): React.ReactElement => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <button className="py-3 px-3" onClick={switchTheme}>
      {theme ? (
        <SunIcon className="h-7 w-7" />
      ) : (
        <SunIcon className="h-7 w-7" />
      )}
    </button>
  )
}
