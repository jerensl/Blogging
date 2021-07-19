import { useState } from 'react'
import { Article } from '../domain/Blog'
import Link from 'next/link'

export const SearchArticles = ({
  posts,
}: {
  posts: Article[]
}): React.ReactElement => {
  const [searchArticles, setSearchArticles] = useState<string>('')

  const articles = posts.filter((article) => {
    if (
      article.title
        .toLocaleLowerCase()
        .includes(searchArticles.toLocaleLowerCase())
    ) {
      return article
    }
  })

  return (
    <section className="min-h-full-screen items-center pt-20 px-4 flex flex-col gap-6">
      <input
        className="p-2 w-full md:w-96 rounded border-2 placeholder-gray-500 border-gray-300 placeholder-opacity-100"
        placeholder="Search Articles..."
        aria-label="Search Articles"
        onChange={(event) => {
          setSearchArticles(event.target.value)
        }}
      />

      {!articles.length && 'No articles found.'}
      {articles.map(({ slug, date, title, summary }) => {
        return (
          <article key={slug} className="flex flex-col gap-1 max-w-3xl">
            <h1 className="text-2xl font-bold leading-8 tracking-tight">
              {title}
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
      })}
    </section>
  )
}
