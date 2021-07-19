import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { Footer } from '../components/Footer'
import { ThemeSwitcher } from './ThemeSwitcher'

interface NavigationProps {
  children: React.ReactElement
}

export const Navigation: React.FC<NavigationProps> = ({
  children,
}): React.ReactElement => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handlers = useSwipeable({
    onSwipedRight: () => setShowSidebar(true),
    trackMouse: true,
    delta: 40,
  })

  const handlersSidebar = useSwipeable({
    onSwipedLeft: () => setShowSidebar(false),
    trackMouse: true,
    delta: 40,
  })

  const handleOpenSidebar = () => setShowSidebar(true)

  const handleCloseSidebar = () => setShowSidebar(false)

  return (
    <>
      <Navbar
        handleSidebarOpen={handleOpenSidebar}
        themeSwitch={<ThemeSwitcher />}
      />
      <div {...handlers}>
        {children}
        <Sidebar
          handlersSidebar={handlersSidebar}
          showSidebar={showSidebar}
          handleSidebarClosed={handleCloseSidebar}
        />
        <Footer />
      </div>
    </>
  )
}
