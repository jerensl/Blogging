import { useState } from 'react'
import { Article } from '../domain/Blog'
import Link from 'next/link'

export const SearchArticles = ({
  posts,
}: {
  posts: Article[]
}): React.ReactElement => {
  const [searchArticles, setSearchArticles] = useState('')

  return (
    <section className="min-h-full-screen items-center pt-20 px-4 flex flex-col gap-6">
      <input
        className="p-2 md:w-96 rounded border-2 placeholder-gray-400 border-gray-400 placeholder-opacity-100"
        placeholder="Search Articles..."
        onChange={(event) => {
          setSearchArticles(event.target.value)
        }}
      />

      {posts?.length
        ? posts
            .filter((article) => {
              if (article.title == '') {
                return article
              }
              if (
                article.title
                  .toLocaleLowerCase()
                  .includes(searchArticles.toLocaleLowerCase())
              ) {
                return article
              }
            })
            .map(({ slug, date, title, summary }) => {
              return (
                <article key={slug} className="flex flex-col gap-1 max-w-3xl">
                  <h1 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </h1>
                  <p className="text-gray-500">{date}</p>

                  <p>{summary}</p>

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
    </section>
  )
}
