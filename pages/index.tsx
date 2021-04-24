import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllPublishedContent } from '../domain/parseMarkdown'
import Link from 'next/link'

type Post = {
  title: string
  date: string
  draft: boolean
  summary: string
  slug: string
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPublishedContent()

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
      <header className="pt-40 h-9/10 px-10 md:px-20 ">
        <div className="max-w-xl">
          <p className="text-2xl">Hi folks, i'm</p>
          <h1 className="font-bold text-4xl mt-1">Jerens Lensun</h1>
          <p className="text-xl mt-4">
            As Tech Enthusiast I learn a lot of stuff so basically, i just share
            my own thought and learning experience, not expertise
          </p>
        </div>
      </header>
      <main className="h-9/10 items-center md:px-20">
        <h1 className="font-bold text-center text-3xl mt-1 p-10">Blog</h1>
        <div className="grid grid-cols-auto gap-5 mt-5">
          {posts?.length
            ? posts.map(({ slug, date, title, summary }) => {
                return (
                  <article key={slug}>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h2>
                    <div className="prose text-markdown-base">{summary}</div>
                  </article>
                )
              })
            : 'No posts found.'}
        </div>
      </main>
      <footer className="h-1/10 flex flex-col justify-center items-center">
        <p>Copyright © 2021 Jerens Lensun.</p>
      </footer>
    </div>
  )
}
