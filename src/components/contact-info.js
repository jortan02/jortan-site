import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact-info.scss";

const ContactInfo = () => {
    return (
        <StaticQuery
            query={graphql`
                query siteContactQuery {
                    site {
                        siteMetadata {
                            phoneNumber
                            emailAddress
                        }
                    }
                }
            `}
            render={(data) => (
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
            )}
        />
    );
};

export default ContactInfo;