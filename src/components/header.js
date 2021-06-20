import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <div className="full-header-container">
            <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
                <button className="button-wrapper" onClick={handleToggle}>
                    <div role="button" className="icon-wrapper">
                        <FontAwesomeIcon icon={faTimes} className="icon" />
                    </div>
                </button>

                <nav>
                    <ul className="links-container menu-links">
                        {menuLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.link}
                                    onClick={() => closeMenu()}
                                    className="navigation-link"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
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
                        <ul className="links-container header-links">
                            {menuLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.link}
                                        className="navigation-link"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="button-wrapper" onClick={handleToggle}>
                        <div role="button" className="icon-wrapper">
                            <FontAwesomeIcon icon={faBars} className="icon" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "Site",
};

export default Header;
