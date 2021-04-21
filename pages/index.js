import Head from 'next/head';
import Banner from '../components/banner';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nextjs by Vecel - The React Framework</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner/>             
        </>
    );
}
