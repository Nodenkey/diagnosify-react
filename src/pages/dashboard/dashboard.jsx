import React from "react";
import "./dashboard.style.css";
import UserSidebar from "../../components/sidebar/userSidebar";
import DoctorSidebar from "../../components/sidebar/doctorSidebar";
import {connect} from "react-redux";


const Dashboard = ({user}) => {
    return (
        <div className='main-dashboard'>
            <div className="sidebar">
                <UserSidebar/>
                {/*<DoctorSidebar/>*/}
            </div>
            <div className="dashboard">
                <div className="dashboard-header"><p className="user-mail">{user}</p></div>
                <h1>Coming soon</h1>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        user: state.auth.user.email,
    }
};

export default connect(mapStateToProps)(Dashboard);