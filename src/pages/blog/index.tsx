import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllPublishArticle, sortByLatestDate } from '../../domain/Blog'
import Link from 'next/link'

export interface Post {
  title: string
  date: string
  draft: boolean
  summary: string
  slug: string
  cover: string
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPublishArticle('contents', sortByLatestDate)

  return {
    props: { posts },
  }
}

export default function Blog({ posts }: { posts: Post[] }): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-full-screen max-w-2xl items-center pt-32 px-4">
        {posts?.length
          ? posts.map(({ slug, date, cover, title, summary }) => {
              return (
                <article key={slug} className="flex flex-col gap-1">
                  <h1 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </h1>
                  <p className="text-gray-500">{date}</p>

                  <div className="">{summary}</div>

                  <Link href={`/blog/${slug}`}>
                    <span className="flex-grow-0 w-24 text-gray-500 hover:text-gray-700 cursor-pointer">
                      Read More →
                    </span>
                  </Link>
                </article>
              )
            })
          : 'No posts found.'}
      </main>
    </div>
  )
}
