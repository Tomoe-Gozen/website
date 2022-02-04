import Head from 'next/head'
import HeroSection from '../components/hero-section'
import About from '../components/about'
import DefaultLayout from '../components/layouts/default'
import Roadmap from '../components/roadmap'
import Team from '../components/team'

export default function Index() {
  return (
    <>
      <Head>
        <title>Tomoe Gozen NFT</title>
      </Head>
      <HeroSection />
      <About />
      <Roadmap />
      <Team />
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
