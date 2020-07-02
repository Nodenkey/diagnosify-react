import React, {useEffect} from 'react';
import {DashboardWrapper} from "./dashboard-right.style";
import {connect} from "react-redux";

const DashboardRight = ({screen}) => {
    console.log('screen', screen);
    if (screen === 'take-scan'){
        return (
            <DashboardWrapper>
                <h1>Take scan</h1>
            </DashboardWrapper>
        )
    }else if (screen === 'my-doctor'){
        return (
            <DashboardWrapper>
                <h1>Doctor</h1>
            </DashboardWrapper>
        )
    }else if (screen === 'scan-history'){
        return (
            <DashboardWrapper>
                <h1>History</h1>
            </DashboardWrapper>
        )
    }else if (screen === 'disease-book'){
        return (
            <DashboardWrapper>
                <h1>Book</h1>
            </DashboardWrapper>
        )
    }else if (screen === 'feedback'){
        return (
            <DashboardWrapper>
                <h1>Doctor</h1>
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
