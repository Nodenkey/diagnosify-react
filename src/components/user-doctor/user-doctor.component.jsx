import React from 'react';
import {UserDoctorWrapper} from "./user-doctor.style";
import {DashBoardIcon} from "../dashboard-right/dashboard-right.style";

const UserDoctor = () => {
    return (
        <UserDoctorWrapper>
            <DashBoardIcon className="fas fa-user-md"/>
            <h3>Your connected doctors will appear here</h3>
        </UserDoctorWrapper>
    );
};

export default UserDoctor;
