import React from "react";
import "./navbar.style.css";
import Logo from "../../assets/images/logo.png";
import CustomButton from "../button/customButton";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <NavLink to='/' exact={true}><img className="navbar-brand" src={Logo} alt="diagnosify_logo"/></NavLink>
            <span className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                <span className="line line1"/>
                <span className="line" id="line-two"/>
                <span className="line" id="line-three"/>
            </span>
            <div id="menu" className="menu collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active-nav" to="/" exact={true} className="nav-link">Home</NavLink>
                    </li>
                    <li className="dropdown nav-item">
                        <span className="drop-button nav-link" data-toggle="dropdown"
                              data-target="service_target">Services</span>
                        <div className="dropdown-content dropdown-menu" aria-labelledby="service_target">
                            <a href="#">Scan image</a>
                            <a href="#">Get mobile app</a>
                        </div>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        About us
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        <CustomButton text="Get Started" button_type='type1' link='/sign-up'/>
                    </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
};


export default NavBar;
