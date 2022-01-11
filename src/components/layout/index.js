import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

function Layout({ children, pages }) {
  return (
    <>
      <Head>
        <title>funGAMES | {pages}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Header />
        <div className="">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
