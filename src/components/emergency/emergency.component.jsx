import React from 'react';
import {Section} from "../globalStyles/globalStyles";
import {EmergencyLayout} from "./emergency.style";
import Ambulance from "../../assets/images/emergency.jpg";

const Emergency = () => {
    return (
        <Section>
            <EmergencyLayout>
                <div>
                    <h1>Never wait till your skin ailment becomes worse</h1>
                    <p>Long appointment wait times are putting patient health at risk. Millions of individuals
                        experience some sort of skin issue, spanning from more cosmetic or uncomfortable issues
                        such as acne all the way to life-threatening conditions such as skin cancer.

                        Timely access to dermatological care could have a positive impact on those conditions. Providing
                        specialty treatment to a possible melanoma within 14 days of diagnosis could improve a patient’s
                        prognosis by 20 percent, researchers reported.
                    </p>
                </div>
                <img src={Ambulance} alt="emergency"/>
            </EmergencyLayout>
        </Section>
    );
};

export default Emergency;
