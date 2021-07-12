import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { Footer } from '../components/Footer'

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

  const handleSidebarOpen = () => setShowSidebar(true)

  const handleSidebarClosed = () => setShowSidebar(false)

  return (
    <>
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <div {...handlers}>
        {children}
        <Sidebar
          showSidebar={showSidebar}
          handleSidebarClosed={handleSidebarClosed}
        />
        <Footer />
      </div>
    </>
  )
}
