import React from "react";
import Content from "../components/content";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";
import ContactInfo from "../components/contact-info";
import "../styles/contact.scss";
import * as variables from "../styles/_variables.module.scss";

const ContactPage = () => {
    return (
        <Content pageTitle="Contact">
            <Hero backgroundColor={variables.offWhite} id="contact">
                <div className="contact-form-container">
                    <h1>Let's get in touch.</h1>
                    <ContactForm />
                </div>
                <div className="personal-info-container">
                    <h2>Jordan Tan</h2>
                    <ContactInfo />
                </div>
            </Hero>
        </Content>
    );
};

export default ContactPage;
