import React from 'react';
import {DashboardWrapper} from "./dashboard-right.style";
import {connect} from "react-redux";
import TakeScan from "../take-scan/take-scan.component";
import UserDoctor from "../user-doctor/user-doctor.component";
import ScanHistory from "../scan-history/scan-history.component";
import DiseaseBook from "../disease-book/disease-book.component";
import Feedback from "../feedback/feedback.component";

const DashboardRight = ({screen}) => {

    if (screen === 'take-scan'){
        return (
            <TakeScan/>
        )
    }else if (screen === 'my-doctor'){
        return (
            <DashboardWrapper>
                <UserDoctor/>
            </DashboardWrapper>
        )
    }else if (screen === 'scan-history'){
        return (
            <DashboardWrapper>
                <ScanHistory/>
            </DashboardWrapper>
        )
    }else if (screen === 'disease-book'){
        return (
            <DashboardWrapper>
                <DiseaseBook/>
            </DashboardWrapper>
        )
    }else if (screen === 'feedback'){
        return (
            <DashboardWrapper>
                <Feedback/>
            </DashboardWrapper>
        )
    }
};
const mapStateToProps = state => {
    return{
        screen: state.dashboard.screen,
    }
};

export default connect(mapStateToProps)(DashboardRight);
