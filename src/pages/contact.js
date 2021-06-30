import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";
import ContactInfo from "../components/contact-info";
import "../styles/contact.scss";

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
            <Hero id="contact">
                <div className="contact-form-container">
                    <h1>Let's get in touch.</h1>
                    <ContactForm />
                </div>
                <div className="personal-info-container">
                    <StaticImage
                        src="../images/qr-code.png"
                        alt="QR code with Jordan Tan's contact information"
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
