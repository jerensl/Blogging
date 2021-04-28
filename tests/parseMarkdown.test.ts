import {
  getFileFromDir,
  getAllPublishedContent,
  getMarkdownBySlug,
} from '../domain/parseMarkdown'

const metadata = [
  {
    title: 'Testing 101',
    date: '2020-04-24',
    draft: false,
    summary: 'Testing code',
    slug: 'test-markdown',
  },
]

const rawMarkdown = {
  mdSource: {
    renderedOutput: '<p>Example code for testing</p>',
  },
  frontMatter: {
    slug: 'test-markdown',
    fileName: 'test-markdown.md',
    title: 'Testing 101',
    date: '2020-04-24',
    draft: false,
    summary: 'Testing code',
  },
}

describe('check parse markdown to html work corectly', () => {
  test('should parse one post from content directory', () => {
    const post = getFileFromDir('tests/contents')
    expect(post).toEqual(['test-markdown'])
  })
  test('should fail when pass wrong directory', () => {
    expect(() => getFileFromDir('tests/content')).toThrow(
      'You are using the wrong directory'
    )
  })
  test('should parse metedata', async () => {
    const data = await getAllPublishedContent('tests/contents')

    expect(data).toMatchObject(metadata)
  })
  test('should parse content and metadata', async () => {
    const data = await getMarkdownBySlug('tests/contents', 'test-markdown')

    expect(data).toMatchObject(rawMarkdown)
  })
})
