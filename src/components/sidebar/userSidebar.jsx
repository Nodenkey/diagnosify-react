import React, {useEffect} from "react";
import "./sidebar.style.css";
import {connect} from "react-redux";
import {
    selectDiseaseBook,
    selectDoctor, selectFeedback,
    selectHistory,
    selectTakeScan,
} from "../../redux/actions";


const UserSidebar = ({user, screen, selectTakeScan, selectDoctor, selectHistory, selectDiseaseBook, selectFeedback}) => {
    let selection = '';


    useEffect(() => {
        const aside = document.querySelectorAll('.aside-element');
        const highlight = document.querySelector(`#${screen}`);
        let iconHighlight = '';

        const highlightChildren = highlight.childNodes;
        highlightChildren.forEach(el => el.nodeName === 'I' ? iconHighlight = el : null)


        aside.forEach(element => element.style.backgroundColor = 'var(--dark-blue)');
        aside.forEach(el => el.childNodes.forEach(el => el.nodeName === 'I' ? el.style.color = 'white' : null));


        highlight.style.backgroundColor = 'rgb(0, 104, 144)';

        iconHighlight.style.color = 'black';

    })

    const makeActive = (event) => {
        if (event.target.nodeName === 'P' || event.target.nodeName === 'I'){
            selection = event.target.parentElement;
        }else {
            selection = event.target;
        }


        if(selection.id === 'take-scan'){
            selectTakeScan();
        }else if (selection.id === 'my-doctor'){
            selectDoctor();
        }else if (selection.id === 'scan-history'){
            selectHistory();
        }else if (selection.id === 'disease-book'){
            selectDiseaseBook();
        }else if (selection.id === 'feedback'){
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
            <div className="aside-element" id="my-doctor" onClick={makeActive}>
                <i className="fas fa-stethoscope icons"/>
                <p className='doctor'>My Doctor</p>
            </div>
            <div className="aside-element" id="scan-history" onClick={makeActive}>
                <i className="fas fa-file-medical icons"/>
                <p className='history'>Scan history</p>
            </div>
            <div className="aside-element" id="disease-book" onClick={makeActive}>
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
        screen: state.dashboard.screen,
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