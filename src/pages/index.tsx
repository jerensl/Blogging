import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import {
  getAllPublishArticle,
  sortByLatestDate,
  Metadata,
} from '../domain/Blog'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const posts: Array<Metadata> = await getAllPublishArticle(
    'contents',
    sortByLatestDate
  )

  return {
    props: { posts },
  }
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  return (
    <>
      <Head>
        <title>Your Name</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="pt-40 min-h-screen px-4">
        <div className="max-w-2xl">
          <p className="text-2xl">Hi folks,</p>
          <h1 className="font-bold text-4xl mt-1">I'm Your Name</h1>
          <p className="text-2xl mt-1">Your Role</p>
          <p className="text-lg md:text-xl mt-4">
            Quisque eget erat sed ante porttitor semper. Fusce facilisis ante
            rutrum mi semper, eu blandit lacus pellentesque. Ut at elit non mi
            ultrices tempus et quis urna.
          </p>
        </div>
      </header>
      <main className="min-h-full-screen items-center px-4">
        <h1 className="font-bold text-center md:text-left text-2xl pt-24 py-1">
          Latest Blog
        </h1>
        <div className="flex flex-col gap-3 mt-4">
          {posts?.length
            ? posts.map(({ slug, date, title, summary }: Metadata) => {
                return (
                  <article
                    className="group max-w-2xl flex p-4 md:px-0 flex-col gap-1"
                    key={slug}
                  >
                    <h1 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h1>
                    <p className="text-gray-500">{date}</p>
                    <p className="line-clamp-4">{summary}</p>
                    <p>
                      <Link href={`/blog/${slug}`}>
                        <span className="text-current cursor-pointer opacity-60 hover:opacity-100">
                          Read More →
                        </span>
                      </Link>
                    </p>
                  </article>
                )
              })
            : 'No posts found.'}
        </div>
      </main>
    </>
  )
}
