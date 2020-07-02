import React from "react";
import "./sidebar.style.css";
import {connect} from "react-redux";
import {
    selectDiseaseBook,
    selectDoctor, selectFeedback,
    selectHistory,
    selectTakeScan,
} from "../../redux/actions";


const UserSidebar = ({user, selectTakeScan, selectDoctor, selectHistory, selectDiseaseBook, selectFeedback}) => {
    const makeActive = (event) => {
        const aside = document.querySelectorAll('.aside-element');
        aside.forEach(element => element.style.background = 'var(--dark-blue)');
        event.target.style.background = 'rgb(0, 104, 144)';

        if(event.target.id === 'take-scan'){
            console.log('clicked take scan');
            selectTakeScan();
        }else if (event.target.id === 'doctor'){
            console.log('clicked doctor');
            selectDoctor();
        }else if (event.target.id === 'history'){
            console.log('clicked history');
            selectHistory();
        }else if (event.target.id === 'book'){
            console.log('clicked book');
            selectDiseaseBook();
        }else if (event.target.id === 'feedback'){
            console.log('clicked feedback');
            selectFeedback();
        }
    };

    return (
        <aside className='main-aside'>
            <div className="head">
                <h4 className="user">User</h4>
                <p>{user}</p>
            </div>
            <div className="aside-element" id="take-scan" onClick={makeActive}>
                <i className="fas fa-camera-retro icons"/>
                <p className='take-scan'>Take scan</p>
            </div>
            <div className="aside-element" id="doctor" onClick={makeActive}>
                <i className="fas fa-stethoscope icons"/>
                <p className='doctor'>My Doctor</p>
            </div>
            <div className="aside-element" id="history" onClick={makeActive}>
                <i className="fas fa-file-medical icons"/>
                <p className='history'>Scan history</p>
            </div>
            <div className="aside-element" id="book" onClick={makeActive}>
                <i className="fas fa-book-medical icons"/>
                <p className='book'>Disease book</p>
            </div>
            <div className="aside-element" id="feedback" onClick={makeActive}>
                <i className="fas fa-comment-dots icons"/>
                <p className='feedback'>Feedback</p>
            </div>
        </aside>
    )
};

const mapStateToProps = state => {
    return{
        user: state.auth.user.email,
    }
};

const mapDispatchToProps = dispatch => ({
    selectTakeScan : () => dispatch(selectTakeScan),
    selectDoctor: () => dispatch(selectDoctor),
    selectHistory: () => dispatch(selectHistory),
    selectDiseaseBook: () => dispatch (selectDiseaseBook),
    selectFeedback: () => dispatch (selectFeedback)
});

export default connect(mapStateToProps, mapDispatchToProps)( UserSidebar);