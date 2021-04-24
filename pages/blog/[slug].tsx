import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getMarkdownBySlug, getFileFromDir } from '../../domain/parseMarkdown'
import hydrate from 'next-mdx-remote/hydrate'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFileFromDir('contents')

  return {
    paths: posts.map((fileName) => ({
      params: {
        slug: fileName,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const posts = await getMarkdownBySlug(params.slug)

  return {
    props: { posts },
  }
}

export default function Blog({ posts }: any): React.ReactElement {
  const { mdSource, frontMatter } = posts
  const { slug, fileName, date, title } = frontMatter
  const content = hydrate(mdSource)

  return (
    <div className="px-20 divide-y divide-gray-200">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-5">
        <h1 className="text-4xl text-center font-bold">{title}</h1>
        <p className="text-center pt-1 text-lg">{date}</p>
      </header>
      <main className="font-medium max-w-3xl m-auto">
        <article>{content}</article>
      </main>
    </div>
  )
}
