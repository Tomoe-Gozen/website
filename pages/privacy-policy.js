import Head from 'next/head'
import WithTitleLayout from '../components/layouts/with-title'
import PrivacyPolicyText from '../components/privacy-policy-text'

export default function PrivacyPolicy() {
  const title = 'Tomoe Gozen NFT - Privacy Policy'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://tomoegozen.io" />
        <meta property="og:site_name" content="Tomoe Gozen" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@TomoeGozenNFTs" />
        <meta name="twitter:creator" content="@TomoeGozenNFTs" />
      </Head>
      <div className="terms-condition-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8">
              <div className="condition-wrapper">
                <PrivacyPolicyText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

PrivacyPolicy.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Terms">{page}</WithTitleLayout>
}