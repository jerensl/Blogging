import Head from 'next/head'

export default function About(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Your Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full-screen px-4">
        <h1 className="pt-28 text-2xl font-bold">Hi, I'm Your Name</h1>
        <p className="max-w-2xl">
          Quisque eget erat sed ante porttitor semper. Fusce facilisis ante
          rutrum mi semper, eu blandit lacus pellentesque. Ut at elit non mi
          ultrices tempus et quis urna.
        </p>
      </div>
    </>
  )
}
