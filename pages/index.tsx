import Head from 'next/head'

export default function Home(): React.ReactElement {
  return (
    <div className="px-20">
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-9/10 text-center">
        <h1 className="p-40 font-bold text-3xl">
          This Page is Under Development
        </h1>
      </main>

      <footer></footer>
    </div>
  )
}
