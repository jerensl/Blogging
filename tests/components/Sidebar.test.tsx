/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { useState } from 'react'
import { Sidebar } from '../../src/components/Sidebar'
import userEvent from '@testing-library/user-event'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { setupIntersectionObserverMock } from '../utils/interaction-observer-mock'

library.add(faGithubSquare, faTwitterSquare, faLinkedin, faTimes)

beforeEach(() => {
  setupIntersectionObserverMock({
    observe: jest.fn(),
    disconnect: jest.fn(),
  })
})

function SidebarComponent() {
  const [showSidebar, setShowSidebar] = useState(true)

  const handleSidebarClosed = () => setShowSidebar(false)

  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        handleSidebarClosed={handleSidebarClosed}
      />
      <span>{showSidebar ? 'open' : 'closed'}</span>
    </>
  )
}

test('Test sidebar component close after being open', async () => {
  render(<SidebarComponent />)

  expect(screen.getByText(/open/i)).toBeInTheDocument()

  const closeSidebar = screen.getByTestId('closed-sidebar')

  userEvent.click(closeSidebar)

  expect(screen.getByText(/closed/i)).toBeInTheDocument()
})
