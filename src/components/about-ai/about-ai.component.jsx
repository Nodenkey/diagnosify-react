import React from 'react';
import {AboutAiWrapper, Image, ThirdHeader} from "./about-ai.style";
import AiImage from "../../assets/images/aiarm.jpg";

const AiComponent = () => {
    return (
        <AboutAiWrapper>
            <Image src={AiImage} alt='robot arm'/>
            <ThirdHeader>Diagnosify is powered by an ultra-modern artificial intelligence model, that has been trained to analyse your
                uploaded images and give predictions comparable to real dermatologists</ThirdHeader>
        </AboutAiWrapper>
    );
};

export default AiComponent;
