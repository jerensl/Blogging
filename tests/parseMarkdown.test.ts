import { getFileFromDir } from '../domain/parseMarkdown'

describe('check parse markdown to html work corectly', () => {
  test('should have two post from contents directory', () => {
    const post = getFileFromDir('contents')

    expect(post).toEqual(['basic-javascript', 'javascript-fundamental'])
  })
  test('should fail when pass wrong directory', () => {
    expect(() => getFileFromDir('content')).toThrow(
      'You are using the wrong directory'
    )
  })
})
