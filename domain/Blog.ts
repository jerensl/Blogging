import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

const rootDirectory = process.cwd()

interface Metadata {
  title: string
  date: string
  draft: boolean
  summary: string
  slug: string
}

interface Post {
  title: string
  fileName: string
  slug: string
  date: string
  draft: boolean
  summary: string
}

function removeFileFormat(fileName: Array<string>) {
  return fileName.map((file) => file.replace(/\.md/, ''))
}

export function getListOfArticle(directory: string) {
  const dir = path.join(rootDirectory, directory)
  if (!fs.existsSync(dir)) {
    throw new Error('You are using the wrong directory')
  }
  const source = fs.readdirSync(dir)
  return removeFileFormat(source)
}

export function getArticleByName(directory: string, fileName: string) {
  const source = path.join(rootDirectory, directory, fileName)

  if (!fs.existsSync(source)) {
    throw new Error('File markdown not found')
  }

  return fs.readFileSync(source, 'utf8')
}

function dateSortDesc(a: number, b: number): number {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getMetadaOfAllPublishArticle(directory: string) {
  const files = getListOfArticle(directory)

  const allFrontMatter: Array<any> = []

  files.map((fileName) => {
    const source = getArticleByName(directory, `${fileName}.md`)
    const { data } = matter(source)
    if (!data.draft) {
      allFrontMatter.push({ ...data, slug: fileName })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}

export const getArticleWithMetadata = async (
  directory: string,
  fileName: string
) => {
  const file = `${fileName}.md`

  const source = getArticleByName(directory, file)

  const { data, content } = matter(source)
  const article = await renderToString(content)

  return {
    article,
    metadata: {
      slug: fileName,
      fileName: file,
      ...data,
    },
  }
}
