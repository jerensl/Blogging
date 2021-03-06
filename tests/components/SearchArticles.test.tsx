/**
 * @jest-environment jsdom
 */
import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchArticles } from '../../src/components/SearchArticles'
import { Metadata } from '../../src/domain/Blog'

const posts: Metadata[] = [
  {
    title: 'Test First Article',
    date: '01-02-2021',
    fileName: 'test-first-article',
    draft: false,
    summary: 'This is a summary',
    slug: 'test-first-title',
  },
  {
    title: 'Test Second Article',
    fileName: 'test-second-article',
    date: '01-03-2021',
    draft: false,
    summary: 'this is a summary',
    slug: 'test-second-title',
  },
]

const renderSearchArticlesComponent = () => {
  const util = render(<SearchArticles posts={posts} />)
  const input = util.getByPlaceholderText('Search Articles...')

  return {
    input,
    ...util,
  }
}

test('Should just have render Test First Article', () => {
  const { input, getAllByRole } = renderSearchArticlesComponent()

  userEvent.type(input, 'Test First Article')

  const result = getAllByRole('article').map((article) => {
    return within(article).getByRole('heading').textContent
  })

  expect(result).toMatchInlineSnapshot(`
Array [
  "Test First Article",
]
`)
})

test('Should render all post named contain article', () => {
  const { input, getAllByRole } = renderSearchArticlesComponent()

  userEvent.type(input, 'article')

  const result = getAllByRole('article').map((article) => {
    return within(article).getByRole('heading').textContent
  })

  expect(result).toMatchInlineSnapshot(`
Array [
  "Test First Article",
  "Test Second Article",
]
`)
})

test('Should not found the article', () => {
  const { input, getByText } = renderSearchArticlesComponent()

  userEvent.type(input, 'Test Third Article')

  expect(getByText(/No Articles found./i)).toBeInTheDocument()
})
