import React from 'react';
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AboutLanding from "../../components/about-landing/about-landing.component";
import AboutConfidence from "../../components/about-confidence/about-confidence.component";
import AboutPatients from "../../components/about-patients/about-patients";
import Team from "../../components/team/team.component";
import Vision from "../../components/vision/vision.component";
import Mission from "../../components/mission/mission.component";


const AboutPage = () => {
    return (
        <>
            <NavBar/>
            <AboutLanding/>
            <AboutConfidence/>
            <Mission/>
            <AboutPatients/>
            <Vision/>
            <Team/>
            <Footer/>
        </>
    );
};

export default AboutPage;
