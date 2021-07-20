import { FC, ReactElement } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock, MarkdownLayout } from '../../src/components'
import { render, RenderOptions } from '@testing-library/react'

const components = {
  code: CodeBlock,
  wrapper: MarkdownLayout,
}

const MarkdownProviders: FC = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MarkdownProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
