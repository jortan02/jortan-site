import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logos/jt-logo.svg";
import { Link } from "gatsby";
import Links from "./links";
import "../styles/header.scss";

// https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

const Header = () => {
    const data = useStaticQuery(graphql`
    {
        site {
          siteMetadata {
            menuLinks {
                link
                name
            }
          }
        }
      }
    `)

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <ReactModal isOpen={menuOpen} className="mobile-menu">
                <button onClick={handleToggle} aria-label="Close site menu" className="button-wrapper">
                    <FontAwesomeIcon icon={faTimes} className="icon" />
                </button>
                <nav>
                    <Links
                        menuLinks={data.site.siteMetadata.menuLinks}
                        styleClass="menu-links"
                        handleClick={closeMenu}
                    />
                </nav>
            </ReactModal>

            <div className="header-container">
                <div className="left-header">
                    <Link to="/" className="header-title">
                        <div className="logo-wrapper">
                            <img src={Logo} alt="JT Logo" className="logo" />
                        </div>
                    </Link>
                </div>
                <div className="right-header">
                    <nav role="navigation">
                        <Links
                            menuLinks={data.site.siteMetadata.menuLinks}
                            styleClass="header-links"
                        />
                    </nav>
                    <button onClick={handleToggle} aria-label="Open site menu" className="button-wrapper" >
                        <FontAwesomeIcon icon={faBars} className="icon" />
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
