import React from "react";
import "./footer.style.css"
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-terms">
                <p>Copyright &copy; 2020. All rights reserved | Diagnosify Limited
                </p>
                <Link to="/"><p className="terms">Terms and conditions</p></Link>
            </div>
        </section>
    )
};
export default Footer;