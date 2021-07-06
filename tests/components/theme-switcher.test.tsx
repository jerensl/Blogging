import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeSwitcher } from '../../src/components'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAdjust } from '@fortawesome/free-solid-svg-icons'

library.add(faAdjust)

test('Theme switcher Button', async () => {
  render(<ThemeSwitcher />)

  expect(screen.getByRole('button')).toBeInTheDocument()
})
