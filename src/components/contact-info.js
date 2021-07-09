import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact-info.scss";

const ContactInfo = () => {
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
        <div className="contact-info-container">
            <div className="contact-info">
                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                <a href={`tel:${data.strapiGlobal.contactInformation.phoneNumber}`}>
                    {data.strapiGlobal.contactInformation.phoneNumber}
                </a>
            </div>
            <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a href={`mailto:${data.strapiGlobal.contactInformation.emailAddress}`}>
                    {data.strapiGlobal.contactInformation.emailAddress}
                </a>
            </div>
            <div className="circle-links-container">
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
        </div>
    );
};

export default ContactInfo;
