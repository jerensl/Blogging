/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react'
import { Navigation } from '../../src/components/Navigation'
import userEvent from '@testing-library/user-event'
import { setupIntersectionObserverMock } from '../utils/interaction-observer-mock'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAdjust,
  faLongArrowAltRight,
  faBars,
  faMoon,
  faSun,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faAdjust,
  faLongArrowAltRight,
  faBars,
  faMoon,
  faSun,
  faTimes
)

beforeEach(() => {
  setupIntersectionObserverMock({
    observe: jest.fn(),
    disconnect: jest.fn(),
  })
})

test('Test open & closed sidebar using button and overlay', async () => {
  const { queryByRole } = render(
    <Navigation>
      <span>Test</span>
    </Navigation>
  )

  expect(queryByRole('dialog')).not.toBeInTheDocument()

  userEvent.click(screen.getByLabelText('Open Sidebar'))

  await waitFor(() => expect(queryByRole('dialog')).toBeInTheDocument())

  userEvent.click(screen.getByLabelText('Closed Sidebar'))

  await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument())

  userEvent.click(screen.getByLabelText('Open Sidebar'))

  await waitFor(() => expect(queryByRole('dialog')).toBeInTheDocument())

  userEvent.click(screen.getByLabelText('Overlay'))

  await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument())
})
