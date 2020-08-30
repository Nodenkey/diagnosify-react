import React from "react";
import "./card.style.css";


const CustomCard = ({image, info, name, facebook, linkedIn, twitter, expertise}) => {
    return (
        <>
            <div className="card">
                <div className="image-container">
                    <div className="image" style={{backgroundImage: `url(${image})`}}>
                    </div>
                </div>
                <div className="info">
                    <h5>{name}</h5>
                    <p>{info}</p>
                    <a href={twitter} rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"/></a>
                    <a href={facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
                </div>
            </div>
        </>
    )
};
export default CustomCard;