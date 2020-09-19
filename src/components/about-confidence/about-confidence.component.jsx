import React from 'react';
import {AboutConfidenceWrapper, ImageContainer, MainConfidenceText, Subtext} from "./about-confidence.style";
import BeautifulWoman from "../../assets/images/beautiful_about.jpg";

const AboutConfidence = () => {
    return (
        <AboutConfidenceWrapper>
            <MainConfidenceText>Ensuring confidence in your skin is literally our business</MainConfidenceText>
            <Subtext>"Beautiful skin requires commitment, not a miracle" - Erno Laszlo</Subtext>
            <ImageContainer src={BeautifulWoman} alt='beautiful woman'/>
        </AboutConfidenceWrapper>
    );
};

export default AboutConfidence;
