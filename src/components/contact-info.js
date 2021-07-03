import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact-info.scss";
import "../styles/circle-links.scss";

const ContactInfo = () => {
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
  `)

    return (
        <div className="contact-info-container">
            <div className="contact-info">
                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                <a href={`tel:${data.site.siteMetadata.phoneNumber}`}>{data.site.siteMetadata.phoneNumber}</a>
            </div>
            <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a href={`mailto:${data.site.siteMetadata.emailAddress}`}>{data.site.siteMetadata.emailAddress}</a>
            </div>
            <div className="circle-links-container">
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
        </div>
    );
};

export default ContactInfo;