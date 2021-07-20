/**
 * @jest-environment jsdom
 */

import { render } from '../utils/markdown-provider'
import Blog from '../../src/pages/blog/[slug]'
import { getArticleWithMetadata } from '../../src/domain/Blog'

const renderBlogSlug = async () => {
  const posts = await getArticleWithMetadata('tests/contents', 'test-markdown')

  const utils = render(<Blog posts={posts} />)

  return { utils }
}

test('Blog should render contents metadata', async () => {
  const { utils } = await renderBlogSlug()

  expect(utils.queryByRole('heading')).toHaveTextContent('Testing 101')
})

test('Blog should render contents body', async () => {
  const { utils } = await renderBlogSlug()

  expect(utils.getByText('Example code for testing')).toBeInTheDocument()
})

test('Blog should render contents code', async () => {
  const { utils } = await renderBlogSlug()

  expect(utils.getByText('console')).toBeInTheDocument()
  expect(utils.getByText('log')).toBeInTheDocument()
  expect(utils.getByText('.')).toBeInTheDocument()
  expect(utils.getByText('(')).toBeInTheDocument()
  expect(utils.getByText("'Hello World'")).toBeInTheDocument()
  expect(utils.getByText(')')).toBeInTheDocument()
})
