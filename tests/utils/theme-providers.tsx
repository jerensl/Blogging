import React, { ReactElement } from 'react'
import { ThemeProvider } from 'next-themes'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

interface TestProviderOptions {
  theme?: string
}

interface CustomOptions extends RenderOptions, TestProviderOptions {}

const createTestProviders =
  ({ theme = 'light' }: TestProviderOptions): React.FC =>
  ({ children }) =>
    (
      <ThemeProvider
        defaultTheme={theme}
        enableSystem={false}
        attribute="class"
      >
        {children}
      </ThemeProvider>
    )

const customRender = (
  ui: ReactElement,
  { theme, ...options }: CustomOptions = {}
): RenderResult =>
  render(ui, { wrapper: createTestProviders({ theme }), ...options })

export * from '@testing-library/react'
export { customRender as render }
