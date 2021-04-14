import Head from 'next/head'

export default function Home(): React.ReactElement {
  return (
    <div className="px-20">
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="grid grid-cols-2 gap-4 pt-40 center h-9/10 ">
          <div>
            <p className="text-2xl">Hi folks, i'm</p>
            <h1 className="font-bold text-4xl mt-1">Jerens Lensun</h1>
            <p className="text-xl mt-4">
              As Tech Enthusiast I do a lot of stuff so basically, i just share
              my own thought and experience, not expertise
            </p>
          </div>
          <div></div>
        </header>
      </main>

      <footer></footer>
    </div>
  )
}
