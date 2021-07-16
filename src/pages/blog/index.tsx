import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllPublishArticle, sortByLatestDate } from '../../domain/Blog'
import { SearchArticles } from '../../components/SearchArticles'
import { Article } from '../../domain/Blog'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPublishArticle('contents', sortByLatestDate)

  return {
    props: { posts },
  }
}

export default function Blog({
  posts,
}: {
  posts: Article[]
}): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      /<SearchArticles posts={posts} />
    </div>
  )
}
