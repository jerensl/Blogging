/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import Blog, { Post } from '../../src/pages/blog/index'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon)
library.add(faSun)

interface Posts {
  posts: Post[]
}

const DEFAULT_PROPS: Posts = {
  posts: [
    {
      title: 'Test First Article',
      date: '22-01-1999',
      draft: true,
      summary: 'This is a summary',
      slug: 'test-first-title',
      cover: '',
    },
    {
      title: 'Test Second Article',
      date: '22-01-1999',
      draft: true,
      summary: 'This is a summary',
      slug: 'test-second-title',
      cover: '',
    },
  ],
}

test('This blog pages will show the list of article', async () => {
  const { getAllByRole } = render(<Blog {...DEFAULT_PROPS} />)

  expect(getAllByRole('heading')[0]).toHaveTextContent('Test First Article')
  expect(getAllByRole('heading')[1]).toHaveTextContent('Test Second Article')
})
