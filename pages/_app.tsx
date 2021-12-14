import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import Head from "next/head";
import Header from "../components/Header";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Clever Marketplace</title>
            </Head>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}

export default App
