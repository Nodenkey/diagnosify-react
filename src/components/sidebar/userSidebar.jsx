import React from "react";
import "./sidebar.style.css";
import {connect} from "react-redux";


const UserSidebar = ({user}) => {
    return (
        <aside className='main-aside'>
            <div className="head">
                <h4 className="user">User</h4>
                <p>{user}</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-camera-retro icons"/>
                <p className='take-scan'>Take scan</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-stethoscope icons"/>
                <p className='doctor'>My Doctor</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-file-medical icons"/>
                <p className='history'>Scan history</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-book-medical icons"/>
                <p className='book'>Disease book</p>
            </div>
            <div className="aside-element">
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

export default connect(mapStateToProps)( UserSidebar);