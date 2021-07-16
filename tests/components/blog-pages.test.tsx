/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import Blog from '../../src/pages/blog/index'
import { Article } from '../../src/domain/Blog'

interface Posts {
  posts: Article[]
}

const DEFAULT_PROPS: Posts = {
  posts: [
    {
      title: 'Test First Article',
      date: '22-01-1999',
      fileName: 'test-first-article',
      draft: true,
      summary: 'This is a summary',
      slug: 'test-first-title',
    },
    {
      title: 'Test Second Article',
      fileName: 'test-second-article',
      date: '22-01-1999',
      draft: true,
      summary: 'this is a summary',
      slug: 'test-second-title',
    },
  ],
}

test('This blog pages will show the list of article', async () => {
  const { getAllByRole } = render(<Blog {...DEFAULT_PROPS} />)

  expect(getAllByRole('heading')[0]).toHaveTextContent('Test First Article')
  expect(getAllByRole('heading')[1]).toHaveTextContent('Test Second Article')
})
