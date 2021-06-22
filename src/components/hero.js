import React from "react";
import PropTypes from "prop-types";
import "../styles/hero.scss";

const Hero = ({backgroundColor, backgroundImage, children}) => {

    const heroBackgroundStyle = {
        backgroundColor: backgroundColor ? backgroundColor : "",
        backgroundImage: backgroundImage ? backgroundColor : "",
    }

    return (
        <div className="hero-container" style={heroBackgroundStyle}>
            <div className="info-container">
                {children}
            </div>
        </div>
    );
};

Hero.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
}

Hero.defaultProps = {
    backgroundColor: "",
    backgroundImage: "",
}

export default Hero;
