import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

const rootDirectory = process.cwd()

function removeFileFormat(fileName: Array<string>) {
  return fileName.map((file) => file.replace(/\.md/, ''))
}

export function getFileFromDir(directory: string) {
  const dir = path.join(rootDirectory, directory)
  if (!fs.existsSync(dir)) {
    throw new Error('You are using the wrong directory')
  }
  const source = fs.readdirSync(dir)
  return removeFileFormat(source)
}

export function readFileFromDir(directory: string, fileName: string) {
  const source = path.join(rootDirectory, directory, fileName)

  return fs.readFileSync(source, 'utf8')
}

function dateSortDesc(a: number, b: number): number {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getAllPublishedContent() {
  const files = getFileFromDir('contents')

  const allFrontMatter: Array<any> = []

  files.map((fileName) => {
    const source = readFileFromDir('contents', `${fileName}.md`)
    const { data } = matter(source)
    if (!data.draft) {
      allFrontMatter.push({ ...data, slug: fileName })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}

export const getMarkdownBySlug = async (fileName: string) => {
  const file = `${fileName}.md`

  const source = readFileFromDir('contents', file)

  const { data, content } = matter(source)
  const mdSource = await renderToString(content)

  return {
    mdSource,
    frontMatter: {
      slug: file || null,
      fileName: file,
      ...data,
    },
  }
}
