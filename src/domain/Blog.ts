import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const rootDirectory = process.cwd()

export interface Metadata {
  title: string
  date: string
  draft: boolean
  summary: string
  slug: string
}

export interface Post {
  title: string
  fileName: string
  slug: string
  date: string
  draft: boolean
  summary: string
}

type Sort = (listOfContent: Array<Metadata>) => Array<Metadata>

export function getListOfArticle(directory: string) {
  const dir = path.join(rootDirectory, directory)
  if (!fs.existsSync(dir)) {
    throw new Error('You are using the wrong directory')
  }

  const listofArticle = fs.readdirSync(dir)

  return listofArticle.map((file) => file.replace(/\.md/, ''))
}

export function sortByLatestDate(listOfContent: Array<Metadata>) {
  return listOfContent.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export function getArticleByName(directory: string, fileName: string) {
  const source = path.join(rootDirectory, directory, fileName)

  if (!fs.existsSync(source)) {
    throw new Error('File markdown not found')
  }

  return fs.readFileSync(source, 'utf8')
}

export async function getAllPublishArticle(
  directory: string,
  sort: Sort
): Promise<Array<Metadata>> {
  const files = getListOfArticle(directory)

  const allMetadata: Array<any> = []

  files.map((fileName) => {
    const source = getArticleByName(directory, `${fileName}.md`)
    const { data } = matter(source)
    if (!data.draft) {
      allMetadata.push({ ...data, slug: fileName })
    }
  })

  return allMetadata
}

export const getArticleWithMetadata = async (
  directory: string,
  fileName: string
) => {
  const file = `${fileName}.md`

  const source = getArticleByName(directory, file)

  const { data, content } = matter(source)

  const article = await serialize(content)

  return {
    article,
    metadata: {
      slug: fileName,
      fileName: file,
      ...data,
    },
  }
}
