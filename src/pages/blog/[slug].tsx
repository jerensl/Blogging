import Head from 'next/head'
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'
import { getArticleWithMetadata, getListOfArticle } from '../../domain/Blog'
import { MDXRemote } from 'next-mdx-remote'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getListOfArticle('contents')

  return {
    paths: posts.map((fileName) => ({
      params: {
        slug: fileName,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const posts = await getArticleWithMetadata('contents', context.params?.slug)

  return {
    props: { posts },
  }
}

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  const { article, metadata } = posts
  const { date, title, summary } = metadata

  return (
    <div className="min-h-full-screen md:px-10 m-auto divide-y divide-gray-200">
      <Head>
        <title>{title}</title>
        <meta name="description" content={summary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pt-24 py-5">
        <h1 className="text-3xl text-center font-bold">{title}</h1>
        <p className="text-center pt-1 text-lg">{date}</p>
      </header>
      <main className="font-medium m-auto">
        <article>
          <MDXRemote {...article} />
        </article>
      </main>
    </div>
  )
}
