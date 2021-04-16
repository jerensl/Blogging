import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

const rootDirectory = process.cwd()

export function formatSlug(slug: string) {
  return slug.replace(/\.md/, '')
}

export async function getFiles(file: string) {
  return fs.readdirSync(path.join(rootDirectory, file))
}

export function dateSortDesc(a: number, b: number) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(rootDirectory, 'contents'))

  const allFrontMatter: Array<any> = []

  files.map((fileName) => {
    const source = fs.readFileSync(
      path.join(rootDirectory, 'contents', fileName),
      'utf8'
    )
    const { data } = matter(source)
    if (!data.draft) {
      allFrontMatter.push({ ...data, slug: formatSlug(fileName) })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}

export const getMarkdownBySlug = async (slug: string) => {
  const mdPath = path.join(rootDirectory, 'contents', `${slug}.md`)

  const source = fs.readFileSync(mdPath, 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content)

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      fileName: `${slug}.md`,
      ...data,
    },
  }
}
