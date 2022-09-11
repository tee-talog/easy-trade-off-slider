import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Sliders from '../components/Sliders'

const Home: NextPage = () => {
  return (
    <div className="text-black/[.87]">
      <Head>
        <title>Easy Trade-Off Slider</title>
        <meta
          name="description"
          content="簡単に使えるトレードオフスライダーです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="px-4 my-6 flex">
        <Sliders className="max-w-5xl container mx-auto" />
      </main>
    </div>
  )
}

export default Home
