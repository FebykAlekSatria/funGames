
import Head from 'next/head';
import HeaderGame from '../header/game';
import FooterGame from '../footer/game';

function LayoutGame({ children, pages }) {
    return (
        <>
            <Head>
                <title>funGAMES | {pages}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <HeaderGame game="funGames" />
                <div className="">
                    {children}
                </div>
                <FooterGame />
            </div>
        </>
    )
}

export default LayoutGame
