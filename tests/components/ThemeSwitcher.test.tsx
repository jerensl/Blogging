/**
 * @jest-environment jsdom
 */

import userEvent from '@testing-library/user-event'
import { ThemeSwitcher } from '../../src/components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { render } from '../utils/theme-providers'
import { useTheme } from 'next-themes'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon)
library.add(faSun)

beforeAll(() => {
  // Create a mock of the window.matchMedia function
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

const ThemeSpy: React.FC = () => {
  const { theme } = useTheme()
  return <span data-testid="theme-spy">{theme}</span>
}

function renderThemeSwitch() {
  const utils = render(
    <>
      <ThemeSwitcher />
      <ThemeSpy />
    </>,
    { theme: 'dark' }
  )

  const button = utils.getByRole('button')

  return { utils, button }
}

test('Theme switcher should render default dark theme', async () => {
  const { utils } = renderThemeSwitch()

  expect(utils.getByTestId('theme-spy')).toHaveTextContent('dark')
})

test('Theme switcher should switch to light theme', async () => {
  const { utils, button } = renderThemeSwitch()

  userEvent.click(button)

  expect(utils.getByTestId('theme-spy')).toHaveTextContent('light')
})

test('Theme switcher should back to dark theme', async () => {
  const { utils, button } = renderThemeSwitch()

  userEvent.click(button)

  expect(utils.getByTestId('theme-spy')).toHaveTextContent('dark')
})
