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
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pt-40 h-9/10">
        <div className="max-w-xl">
          <p className="text-2xl">Hi folks, i'm</p>
          <h1 className="font-bold text-4xl mt-1">Jerens Lensun</h1>
          <p className="text-xl mt-4">
            As Tech Enthusiast I learn a lot of stuff so basically, i just share
            my own thought and learning experience, not expertise
          </p>
        </div>
      </header>
      <main className="h-9/10  items-center">
        <h1 className="font-semibold text-3xl py-5">Blog</h1>
        <div className="grid gap-5 mt-5">
          {posts?.length
            ? posts.map(({ slug, date, title, summary }) => {
                return (
                  <article className="max-w-2xl" key={slug}>
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
