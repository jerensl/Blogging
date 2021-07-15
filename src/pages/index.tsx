import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllPublishArticle, sortByLatestDate, Post } from '../domain/Blog'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPublishArticle('contents', sortByLatestDate)

  return {
    props: { posts },
  }
}

export default function Home({ posts }: { posts: Post[] }): React.ReactElement {
  return (
    <>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="pt-40 min-h-screen px-4">
        <div className="max-w-2xl">
          <p className="text-2xl">Hi folks,</p>
          <h1 className="font-bold text-4xl mt-1">I'm Jerens Lensun</h1>
          <p className="text-2xl mt-1">🤡 Developer</p>
          <p className="text-lg md:text-xl mt-4">
            As Tech Enthusiast I passionate about a lot of stuff especially
            developing apps so basically, I just share my clown thought and
            learning experience, not expertise. Don't take my word directly do
            your own research.
          </p>
        </div>
      </header>
      <main className="h-9/10 items-center px-4">
        <h1 className="font-bold text-center md:text-left text-2xl pt-24 py-1">
          Latest Blog
        </h1>
        <div className="flex flex-col gap-3 mt-4">
          {posts?.length
            ? posts.map(({ slug, date, title, summary }) => {
                return (
                  <article
                    className="group max-w-2xl flex p-4 md:px-0 flex-col gap-1"
                    key={slug}
                  >
                    <h1 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h1>
                    <p className="text-gray-500">{date}</p>
                    <p className="">{summary}</p>
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
