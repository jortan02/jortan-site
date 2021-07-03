import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.scss";
import "../styles/circle-links.scss";

const Footer = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                id
                siteMetadata {
                    phoneNumber
                    emailAddress
                    github
                    linkedin
                }
            }
        }
    `);

    return (
        <footer>
            <span>&copy; 2021 Jordan Tan</span>
            <div className="circle-links-container">
                <a
                    aria-label="Open phone number in another client"
                    href={`tel:${data.site.siteMetadata.phoneNumber}`}
                >
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                </a>
                <a
                    aria-label="Open email address in another client"
                    href={`mailto:${data.site.siteMetadata.emailAddress}`}
                >
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
                <a
                    aria-label="Open my Github page"
                    href={data.site.siteMetadata.github}
                >
                    <FontAwesomeIcon
                        icon={faGithubAlt}
                        role="button"
                        aria-label="Link to Github"
                        className="icon"
                    />
                </a>
                <a
                    aria-label="Open my Linkedin page"
                    href={data.site.siteMetadata.linkedin}
                >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </div>
            <span>Created using Gatsby</span>
        </footer>
    );
};

export default Footer;
