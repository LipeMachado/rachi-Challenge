import React from 'react';
import Contact from '../../Sections/Contact';
import DownloadApp from '../../Sections/DownloadApp';
import Footer from '../../Sections/Footer';
import Header from '../../Sections/Header';
import HowItWorks from '../../Sections/HowItWorks';
import NavBar from '../../Sections/NavBar';
import Plans from '../../Sections/Plans';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Header />
            <HowItWorks />
            <DownloadApp />
            <Plans />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;