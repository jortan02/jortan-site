import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactInfo from "../components/contact-info";
import ContactForm from "../components/contact-form";
import "../styles/contact.scss";

export const query = graphql`
    fragment ContactImages on StrapiGlobal {
        contactInformation {
            qrCode {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            width: 180
                            height: 180
                            layout: FIXED
                        )
                    }
                }
            }
        }
    }
`

const ContactPage = () => {
    const seo = {
        metaTitle: "Contact",
    };

    const data = useStaticQuery(graphql`
        {
            strapiGlobal {
                ...ContactImages
            }
        }
    `);
    const contact = data.strapiGlobal.contactInformation;

    return (
        <Layout seo={seo} id="contact">
            <Hero>
                <div className="contact-form-container">
                    <h1>Let's Get in Touch.</h1>
                    <ContactForm />
                </div>
                <div className="personal-info-container">
                    <GatsbyImage
                        image={getImage(contact.qrCode.localFile)}
                        alt="QR code with contact information"
                        className="qr-code-wrapper"
                        imgClassName="qr-code"
                    />
                    <div>
                        <h2>Jordan Tan</h2>
                        <ContactInfo />
                    </div>
                </div>
            </Hero>
        </Layout>
    );
};

export default ContactPage;
