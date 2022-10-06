import React from 'react';
import DownloadApp from '../../Sections/DownloadApp';
import Header from '../../Sections/Header';
import HowItWorks from '../../Sections/HowItWorks';
import NavBar from '../../Sections/NavBar';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Header />
            <HowItWorks />
            <DownloadApp />
        </>
    );
}

export default HomePage;