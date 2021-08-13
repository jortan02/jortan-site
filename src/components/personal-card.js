import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "../components/contact-info";
import "../styles/personal-card.scss";

const PersonalCard = () => {
    const data = useStaticQuery(graphql`
        {
            strapiGlobal {
                contactInformation {
                    qrCode {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    quality: 90
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    const contact = data.strapiGlobal.contactInformation;

    const [qrOpenCode, setQrOpen] = useState(false);

    const handleToggle = () => {
        setQrOpen((prev) => !prev);
    };

    return (
        <div className="card-container">
            <button className="button-wrapper" aria-label="Toggle QR code with contact information" onClick={handleToggle}>
                <FontAwesomeIcon icon={faQrcode} className="icon" />
            </button>
            {qrOpenCode ? (
                <GatsbyImage
                    image={getImage(contact.qrCode.localFile)}
                    alt="QR code with contact information"
                    className="qr-code-wrapper"
                    imgClassName="qr-code"
                />
            ) : (
                <StaticImage
                    src="../images/profile_picture.jpg"
                    alt="Jordan Tan"
                    layout="fixed"
                    width={150}
                    height={150}
                    className="profile-picture-wrapper"
                    imgClassName="profile-picture"
                />
            )}
            <div className="personal-info-container">
                <div className="name-container">
                    <h2>Jordan Tan</h2>
                    <h3>Student</h3>
                </div>
                <ContactInfo />
            </div>
        </div>
    );
};

export default PersonalCard;
