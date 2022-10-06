import React from 'react';
import Header from '../../Sections/Header';
import HowItWorks from '../../Sections/HowItWorks';
import NavBar from '../../Sections/NavBar';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Header />
            <HowItWorks />
        </>
    );
}

export default HomePage;