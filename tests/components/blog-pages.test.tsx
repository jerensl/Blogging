/**
 * @jest-environment jsdom
 */

import { render, within } from '../utils/markdown-provider'
import Blog from '../../src/pages/blog/index'
import { getAllPublishArticle, sortByLatestDate } from '../../src/domain/Blog'

const renderBlogSlug = async () => {
  const posts = await getAllPublishArticle('tests/contents', sortByLatestDate)

  const utils = render(<Blog posts={posts} />)

  return { utils }
}

test('This blog pages will show the list of article', async () => {
  const { utils } = await renderBlogSlug()

  const result = utils.getAllByRole('article').map((article) => {
    return within(article).getByRole('heading').textContent
  })

  expect(result).toMatchInlineSnapshot(`
Array [
  "Testing 101",
]
`)
})
