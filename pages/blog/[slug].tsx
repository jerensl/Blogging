import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getArticleWithMetadata, getListOfArticle } from '../../domain/Blog'
import hydrate from 'next-mdx-remote/hydrate'

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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const posts = await getArticleWithMetadata('contents', params.slug)

  return {
    props: { posts },
  }
}

export default function Blog({ posts }: any): React.ReactElement {
  const { article, metadata } = posts
  const { slug, fileName, date, title } = metadata
  const content = hydrate(article)

  return (
    <div className=" min-h-full-screen divide-y divide-gray-200">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-5">
        <h1 className="text-4xl text-center font-bold">{title}</h1>
        <p className="text-center pt-1 text-lg">{date}</p>
      </header>
      <main className="font-medium m-auto">
        <article>{content}</article>
      </main>
    </div>
  )
}
