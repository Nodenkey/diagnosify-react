import React from 'react';
import {DashBoardIcon} from "../dashboard-right/dashboard-right.style";
import {HistoryWrapper, ScanLink} from "./scan-history.style";
import {connect} from "react-redux";
import {selectTakeScan} from "../../redux/actions";

const ScanHistory = ({goToScan}) => {

    return (
        <HistoryWrapper>
            <DashBoardIcon className="fas fa-file-medical icons"/>
            <h3>You currently haven't made any scan</h3>
            <h4>Click <ScanLink onClick={goToScan}>here</ScanLink> to scan your skin</h4>
        </HistoryWrapper>
    );
};

const mapDispatchToProps = dispatch => ({
    goToScan: () => dispatch(selectTakeScan)
})


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(ScanHistory);
