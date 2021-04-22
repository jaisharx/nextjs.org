import Head from 'next/head';
import Banner from '../components/banner';
import Improvements from '../components/improvements';
import Navbar from '../components/navbar';
import CTASection from '../components/sections/cta';
import CustomerSection from '../components/sections/customers';
import FeatureSection from '../components/sections/features';
import HeroSection from '../components/sections/hero';
import LearnSection from '../components/sections/learn';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nextjs by Vecel - The React Framework</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner />
            <Navbar />
            <Improvements />
            <HeroSection />
            <FeatureSection />
            <CustomerSection />
            <LearnSection />
            <CTASection />
        </>
    );
}
