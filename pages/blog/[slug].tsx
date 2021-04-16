import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import {
  getMarkdownBySlug,
  formatSlug,
  getFiles,
} from '../../domain/parseMarkdown'
import hydrate from 'next-mdx-remote/hydrate'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('contents')

  console.log(posts)

  return {
    paths: posts.map((md) => ({
      params: {
        slug: formatSlug(md),
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
  const { mdxSource, frontMatter } = posts
  const content = hydrate(mdxSource)

  return (
    <div className="px-20">
      <Head>
        <title>{posts.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-medium">
        <article>{content}</article>
      </main>
    </div>
  )
}
