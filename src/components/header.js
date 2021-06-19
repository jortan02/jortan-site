import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/main.scss";

// https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

const Header = () => {
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
                <div className="close-icon-wrapper">
                    <FontAwesomeIcon onClick={closeMenu} className="close-icon" icon={faTimes} />
                </div>

                <div className="navigation-links-container">
                    <Link
                        to="/"
                        onClick={() => closeMenu()} 
                        className="navigation-link"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => closeMenu()}
                        className="navigation-link"
                    >
                        About
                    </Link>
                    <Link
                        to="/blog"
                        onClick={() => closeMenu()}
                        className="navigation-link"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/portfolio"
                        onClick={() => closeMenu()}
                        className="navigation-link"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => closeMenu()}
                        className="navigation-link"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className="header-container">
                <div className="left-header">
                    <Link to="/" className="header-logo">
                        Jordan Tan
                    </Link>
                </div>
                <div className="right-header">
                    <div className="navigation-links-container">
                        <Link to="/" className="navigation-link">
                            Home
                        </Link>
                        <Link to="/about" className="navigation-link">
                            About
                        </Link>
                        <Link to="/blog" className="navigation-link">
                            Blog
                        </Link>
                        <Link to="/portfolio" className="navigation-link">
                            Portfolio
                        </Link>
                        <Link to="/contact" className="navigation-link">
                            Contact
                        </Link>
                    </div>
                    <div className="mobile-menu-icon-container">
                        <FontAwesomeIcon
                            onClick={handleToggle}
                            icon={faBars}
                            className="mobile-menu-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
