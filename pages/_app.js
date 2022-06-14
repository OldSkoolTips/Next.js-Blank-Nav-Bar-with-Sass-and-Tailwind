import App from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/app.css'
import '../styles/globals.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1.0'
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
