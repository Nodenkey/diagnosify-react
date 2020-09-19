import React from 'react';
import CustomCard from "../card/card";
import Mike from "../../assets/images/mike.jpg";
import Nii from "../../assets/images/nii.jpg";
import {Grid, Section} from "../globalStyles/globalStyles";

const Team = () => {
    return (
        <Section pad>
            <h1 style={{textAlign: 'center'}}>Meet the team</h1>
            <Grid column='1fr 1fr' style={{margin: '100px auto 0'}} central className="cards" gap='50px'>
                <CustomCard image={Mike} name="Michael Asante"
                            info="Technochrat | Data Engineer | Researcher | Cloud manager"
                />

                <CustomCard image={Nii} name="Samuel Abbey"
                            info="Web developer | UI/UX designer | Biologist"
                            facebook="https://web.facebook.com/nii.o.abbey"
                            linkedIn="https://www.linkedin.com/in/samuel-abbey-618957168/"/>
            </Grid>
        </Section>
    );
};

export default Team;
