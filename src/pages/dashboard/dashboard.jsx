import React from "react";
import "./dashboard.style.css";
import UserSidebar from "../../components/sidebar/userSidebar";
import {connect} from "react-redux";
import DashboardRight from "../../components/dashboard-right/dashboard-right.component";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";


const Dashboard = ({user}) => {
    return (
        <>
            <NavBar/>
            <div className='main-dashboard'>
                <div className="sidebar">
                    <UserSidebar/>
                    {/*<DoctorSidebar/>*/}
                </div>
                <div className="dashboard">
                    <div className="dashboard-header"><p className="user-mail">{user}</p></div>
                    <DashboardRight/>
                </div>
            </div>
            <Footer/>
        </>
    )
};

const mapStateToProps = state => {
    return {
        user: state.auth.user.email,
    }
};

export default connect(mapStateToProps)(Dashboard);