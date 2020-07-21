import React from 'react';
import {FeedbackWrapper} from "./feedback.style";
import {DashBoardIcon} from "../dashboard-right/dashboard-right.style";

const Feedback = () => {
    return (
        <FeedbackWrapper>
            <DashBoardIcon className="fas fa-comment-dots icons"/>
            <h3>Your feedback is very important to us</h3>
        </FeedbackWrapper>
    );
};

export default Feedback;
