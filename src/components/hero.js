import React from "react";
import PropTypes from "prop-types";
import "../styles/hero.scss";

const Hero = ({ children }) => {
    return (
        <div className="hero-container">
            <div className="info-container">{children}</div>
        </div>
    );
};

Hero.propTypes = {
    id: PropTypes.string,
};

Hero.defaultProps = {
    id: "",
};

export default Hero;
