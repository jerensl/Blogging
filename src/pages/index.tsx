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
    <div>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pt-40 min-h-screen">
        <div className="max-w-2xl">
          <p className="text-2xl">Hi folks, i'm</p>
          <h1 className="font-bold text-4xl mt-1">Jerens Lensun</h1>
          <p className="text-lg md:text-xl mt-4">
            As Tech Enthusiast I passionate about a lot of stuff especially
            developing apps so basically, I just share my own thought and
            learning experience, not expertise. Don't take my word directly do
            your own research.
          </p>
        </div>
      </header>
      <main className="h-9/10  items-center">
        <h1 className="font-semibold text-2xl pt-24 py-1">Latest Blog</h1>
        <div className="grid gap-5 mt-5">
          {posts?.length
            ? posts.map(({ slug, date, title, summary }) => {
                return (
                  <article className="max-w-2xl flex flex-col gap-1" key={slug}>
                    <h1 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h1>
                    <p className="text-gray-500">{date}</p>

                    <div className="">{summary}</div>

                    <Link href={`/blog/${slug}`}>
                      <span className="text-current opacity-60 cursor-pointer hover:opacity-100">
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
