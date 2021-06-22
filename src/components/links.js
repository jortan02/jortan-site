import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Links = ({ menuLinks, styleClass, handleClick }) => {
    return (
        <ul className={`links-container ${styleClass ? styleClass : ""}`}>
            {menuLinks.map((link) => (
                <li key={link.name}>
                    <Link
                        to={link.link}
                        onClick={typeof handleClick === "function" ? handleClick : null}
                        className="navigation-link"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

Links.propTypes = {
    menuLinks: PropTypes.array,
    styleClass: PropTypes.string,
    handleClick: PropTypes.func,
}

Links.defaultProps = {
    menuLinks: "",
    styleClass: "",
    handleClick: null,
}

export default Links;