import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/circle-links.scss";

const CircleLinks = () => {
    const data = useStaticQuery(graphql`
        {
            strapiGlobal {
                contactInformation {
                    emailAddress
                    github
                    id
                    linkedin
                    phoneNumber
                }
            }
        }
    `);

    return (
        <div className="circle-links-container">
            <a
                aria-label="Open phone number in another client"
                href={`tel:${data.strapiGlobal.contactInformation.phoneNumber}`}
            >
                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
            </a>
            <a
                aria-label="Open email address in another client"
                href={`mailto:${data.strapiGlobal.contactInformation.emailAddress}`}
            >
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
            <a
                aria-label="Open my Github page"
                href={data.strapiGlobal.contactInformation.github}
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
                href={data.strapiGlobal.contactInformation.linkedin}
            >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
        </div>
    );
};

export default CircleLinks;
