/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { ThemeSwitcher } from '../../src/components'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon)

test('Theme switcher Button', async () => {
  render(<ThemeSwitcher />)

  expect(screen.getByRole('button')).toBeInTheDocument()
})
