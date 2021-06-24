import React from "react";
import "../styles/hero.scss";

const Hero = ({ id, children }) => {
    return (
        <div className="hero-container" id={id}>
            <div className="info-container">
                {children}
            </div>
        </div>
    );
};

export default Hero;
