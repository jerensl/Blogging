import Head from 'next/head'

export default function Home(): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Jerens Lensun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pt-40 h-9/10 px-10 md:px-20">
        <div className="max-w-xl">
          <p className="text-2xl">Hi folks, i'm</p>
          <h1 className="font-bold text-4xl mt-1">Jerens Lensun</h1>
          <p className="text-xl mt-4">
            As Tech Enthusiast I do a lot of stuff so basically, i just share my
            own thought and experience, not expertise
          </p>
        </div>
      </header>
      <main className="h-9/10 flex flex-col items-center">
        <h1 className="font-bold text-3xl mt-1 p-10">Blog</h1>
      </main>
      <footer className="h-1/10 flex flex-col justify-center items-center">
        <p>Copyright © 2021 Jerens Lensun.</p>
      </footer>
    </div>
  )
}
