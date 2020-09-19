import React from 'react';
import {Grid, HeaderThree, ImageContainer, Paragraph, Section} from "../globalStyles/globalStyles";
import Skin from "../../assets/images/patient.jpg";
import CustomButton from "../button/customButton";


const AboutPatients = () => {
    return (
        <Section pad>
            <HeaderThree>Diagnosify for patients</HeaderThree>
            <Grid column='1fr 1fr' gap='50px' centralH>
                <ImageContainer src={Skin} alt='black man showing skin'/>
                <div>
                    <Paragraph style={{marginBottom: '50px'}}>There is no need to be uncertain and anxious about your skin problem and have
                        delays in
                        identifying it or becoming confused by searching skin conditions online. Diagnosify is an online AI
                        diagnosis tool that helps you analyze and identify your skin condition easily and accurately. You’ll
                        receive a prediction of skin disease and its accuracy
                        that will enable you to decide quickly and confidently if you should consult your doctor.
                    </Paragraph>
                    <CustomButton text='scan skin' button_type='type1' link='/dashboard'/>
                </div>
            </Grid>
        </Section>
    );
};

export default AboutPatients;
