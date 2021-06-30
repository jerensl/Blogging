import Head from 'next/head'

export default function About(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full-screen">
        <h1 className="pt-28 text-2xl font-bold">Hi, I'm Jerens</h1>
        <p className="max-w-2xl">
          Hi folks, I'm Jerens. I like watching anime & football my favorite
          club is Manchester United and if you believe in MBTI I'm INTP. Almost
          everything on this blog is my own opinion but sometimes I refer to
          articles or videos I think trustworthy.
        </p>
      </div>
    </>
  )
}
