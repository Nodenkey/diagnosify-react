import React from 'react';
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AboutLanding from "../../components/about-landing/about-landing.component";
import AboutConfidence from "../../components/about-confidence/about-confidence.component";


const AboutPage = () => {
    return (
        <>
            <NavBar/>
            <AboutLanding/>
            <AboutConfidence/>
            <Footer/>
        </>
    );
};

export default AboutPage;
