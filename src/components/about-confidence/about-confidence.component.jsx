import React from 'react';
import {AboutConfidenceWrapper, ImageContainer, MainConfidenceText, Subtext} from "./about-confidence.style";
import ConfidentMan from "../../assets/images/confident_man.jpg";

const AboutConfidence = () => {
    return (
        <AboutConfidenceWrapper>
            <MainConfidenceText>Ensuring confidence in your skin is literally our business</MainConfidenceText>
            <Subtext>"Beautiful skin requires commitment, not a miracle" - Erno Laszlo</Subtext>
            <ImageContainer src={ConfidentMan} alt='confident man'/>
        </AboutConfidenceWrapper>
    );
};

export default AboutConfidence;
