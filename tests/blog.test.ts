import {
  getListOfArticle,
  getMetadaOfAllPublishArticle,
  getArticleWithMetadata,
} from '../domain/Blog'

const metadata = [
  {
    title: 'Testing 101',
    date: '2020-04-24',
    draft: false,
    summary: 'Testing code',
    slug: 'test-markdown',
  },
]

const exampleArticle = {
  article: {
    renderedOutput: '<p>Example code for testing</p>',
  },
  metadata: {
    slug: 'test-markdown',
    fileName: 'test-markdown.md',
    title: 'Testing 101',
    date: '2020-04-24',
    draft: false,
    summary: 'Testing code',
  },
}

describe('check blog working correctly', () => {
  test('should parse one post from content directory', () => {
    const post = getListOfArticle('tests/contents')
    expect(post).toEqual(['test-markdown'])
  })
  test('should fail when pass wrong directory', () => {
    expect(() => getListOfArticle('tests/content')).toThrow(
      'You are using the wrong directory'
    )
  })
  test('should parse metadata', async () => {
    const data = await getMetadaOfAllPublishArticle('tests/contents')

    expect(data).toMatchObject(metadata)
  })
  test('should parse article and metadata', async () => {
    const data = await getArticleWithMetadata('tests/contents', 'test-markdown')

    expect(data).toMatchObject(exampleArticle)
  })
})