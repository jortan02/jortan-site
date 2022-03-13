import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "../components/contact-info";
import "../styles/personal-card.scss";

const PersonalCard = () => {
    const { strapiGlobal } = useStaticQuery(query);
    const { contactInformation } = strapiGlobal;

    const [qrOpenCode, setQrOpen] = useState(false);

    const handleToggle = () => {
        setQrOpen((prev) => !prev);
    };

    return (
        <div className="card-container">
            <button
                className="button-wrapper"
                aria-label="Toggle QR code with contact information"
                onClick={handleToggle}
            >
                <FontAwesomeIcon icon={faQrcode} className="icon" />
            </button>
            {qrOpenCode ? (
                <GatsbyImage
                    image={getImage(contactInformation.qrCode.localFile)}
                    alt="QR code with contact information"
                    className="qr-code-wrapper"
                    imgClassName="qr-code"
                />
            ) : (
                <GatsbyImage
                    image={getImage(
                        contactInformation.profilePicture.localFile
                    )}
                    alt="Jordan Tan"
                    className="profile-picture-wrapper"
                    imgClassName="profile-picture"
                />
            )}
            <div className="personal-info-container">
                <div className="name-container">
                    <h2>Jordan Tan</h2>
                    <h3>{contactInformation.role}</h3>
                </div>
                <ContactInfo />
            </div>
        </div>
    );
};

export const contactInformationTextQuery = graphql`
    fragment ContactInformationText on StrapiGlobal {
        contactInformation {
            emailAddress
            github
            id
            linkedin
            phoneNumber
            role
        }
    }
`;

export const profilePictureQuery = graphql`
    fragment ProfileImageFile on StrapiGlobal {
        contactInformation {
            profilePicture {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
        }
    }
`;

export const qrCodeQuery = graphql`
    fragment QrImageFile on StrapiGlobal {
        contactInformation {
            qrCode {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
        }
    }
`;

const query = graphql`
    {
        strapiGlobal {
            ...ContactInformationText
            ...QrImageFile
            ...ProfileImageFile
        }
    }
`;

export default PersonalCard;
