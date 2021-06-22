import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Links from "./links";
import "../styles/header.scss";

// https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

const Header = ({ menuLinks, siteTitle }) => {  
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
                <button className="button-wrapper" onClick={handleToggle}>
                    <div role="button" className="icon-wrapper">
                        <FontAwesomeIcon icon={faTimes} className="icon" />
                    </div>
                </button>

                <nav>
                    <Links menuLinks={menuLinks} styleClass="menu-links" handleClick={closeMenu} />
                </nav>
            </div>

            <div className="header-container">
                <div className="left-header">
                    <Link to="/" className="header-logo">
                        {siteTitle}
                    </Link>
                </div>
                <div className="right-header">
                    <nav role="navigation">
                        <Links menuLinks={menuLinks} styleClass="header-links"/>
                    </nav>
                    <button className="button-wrapper" onClick={handleToggle}>
                        <div role="button" className="icon-wrapper">
                            <FontAwesomeIcon icon={faBars} className="icon" />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "Site",
};

export default Header;
