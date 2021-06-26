import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact-info.scss";

const ContactInfo = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          phoneNumber
          emailAddress
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
        </div>
    );
};

export default ContactInfo;