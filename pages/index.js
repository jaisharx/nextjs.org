import Head from 'next/head';
import Banner from '../components/banner';
import Improvements from '../components/improments';
import Navbar from '../components/navbar';
import FeatureSection from '../components/sections/features';
import HeroSection from '../components/sections/hero';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nextjs by Vecel - The React Framework</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner/>
            <Navbar/>
            <Improvements/>
            <HeroSection/>
            <FeatureSection/>
        </>
    );
}
