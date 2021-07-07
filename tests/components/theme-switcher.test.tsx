/**
 * @jest-environment jsdom
 */

import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeSwitcher } from '../../src/components'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon)
library.add(faSun)

function renderThemeSwitch() {
  const utils = render(<ThemeSwitcher />)

  const button = utils.getByRole('button')

  return { utils, button }
}

test('Theme switcher to dark theme', async () => {
  const { utils } = renderThemeSwitch()

  expect(utils.getByTestId('dark-button')).toHaveAttribute('data-icon', 'moon')
})
