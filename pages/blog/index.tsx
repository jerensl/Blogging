import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getMetadaOfAllPublishArticle } from '../../domain/Blog'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  draft: boolean
  summary: string
  slug: string
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getMetadaOfAllPublishArticle('contents')

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
      <main className="min-h-full-screen max-w-2xl items-center">
        <h1 className="font-bold text-3xl mt-1 py-10 m-auto">Blog</h1>
        <div className="grid grid-row gap-5 mt-5">
          {posts?.length
            ? posts.map(({ slug, date, title, summary }) => {
                return (
                  <article key={slug}>
                    <h1 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h1>
                    <p className="text-gray-500">{date}</p>

                    <div className="">{summary}</div>

                    <Link href={`/blog/${slug}`}>
                      <span className="text-gray-500 cursor-pointer">
                        Read More →
                      </span>
                    </Link>
                  </article>
                )
              })
            : 'No posts found.'}
        </div>
      </main>
    </div>
  )
}
