import React from 'react';
import {BookWrapper} from "./disease-book.style";
import {DashBoardIcon} from "../dashboard-right/dashboard-right.style";

const DiseaseBook = () => {
    return (
        <BookWrapper>
            <DashBoardIcon className="fas fa-book-medical icons"/>
            <h3 style={{maxWidth: '80%', margin: '0 auto'}}>This feature will enable you search for skin diseases and better understand your condition</h3>
        </BookWrapper>
    );
};

export default DiseaseBook;
