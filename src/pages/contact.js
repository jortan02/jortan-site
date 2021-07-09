import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactInfo from "../components/contact-info";
import ContactForm from "../components/contact-form";
import "../styles/contact.scss";

const ContactPage = () => {
    const seo = {
        metaTitle: "Contact",
    };

    return (
        <Layout seo={seo} id="contact">
            <Hero>
                <ContactForm />
                <div className="personal-info-container">
                    <StaticImage
                        src="../images/qr-code.png"
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
