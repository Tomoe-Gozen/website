import { ThirdwebProvider } from '@thirdweb-dev/react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import config from '../lib/config'
import * as ga from '../lib/ga'
import '../styles/custom.css'
import '../styles/plugins/feature.css'
import '../styles/plugins/jquery-ui.min.css'
import '../styles/plugins/noty.css'
import '../styles/style.css'
import '../styles/vendor/bootstrap.min.css'
import '../styles/vendor/nice-select.css'
import '../styles/vendor/slick-theme.css'
import '../styles/vendor/slick.css'

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const initTheme = () => import('../lib/theme').then((init) => init.default())

  const handleAnchor = (timeOut = 0) => {
    // scroll to anchor fix https://github.com/vercel/next.js/issues/11109#issuecomment-844443085
    const path = window.location.hash
    if (path && path.includes('#')) {
      window.scrollTo(0, 0)
      const id = path.replace('#', '')
      if (id) {
        setTimeout(() => {
          document
            .querySelector('#' + id)
            .scrollIntoView({ behavior: 'smooth' })
        }, timeOut)
      }
    }
  }

  useEffect(() => {
    initTheme()
    handleAnchor(1500)

    const handleRouteChange = (url) => {
      initTheme()
      handleAnchor(100)
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
        ga.pageview(url)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, pageProps])

  return (
    <>
      <Script src="https://kit.fontawesome.com/6dc39c7558.js" />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="all" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <ThirdwebProvider desiredChainId={config.chainId}>
        {getLayout(<Component {...pageProps} />)}
      </ThirdwebProvider>
    </>
  )
}

export default MyApp
