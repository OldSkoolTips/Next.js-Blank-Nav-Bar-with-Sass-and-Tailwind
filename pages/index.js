import Head from 'next/head'
function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>Basic Nav Bar</title>
        </Head>
        <div>Blank Page</div>
        <div>© Sparky {new Date().getFullYear()}</div>
      </div>
    </>
  )
}

export default HomePage
