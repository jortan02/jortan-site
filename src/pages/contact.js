import React from "react";
import Content from "../components/content";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact-form.scss";
import * as variables from "../styles/_variables.module.scss";

const ContactPage = () => {
    return (
        <Content pageTitle="Contact">
            <Hero backgroundColor={variables.offWhite}>
                <div className="contact-form-container">
                    <h1>Let's get in touch.</h1>
                    <ContactForm />
                </div>
                <div className="contact-info-container">
                    <h2>Jordan Tan</h2>
                    <div className="contact-info">
                        <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                        <span>435-823-0976</span>
                    </div>
                    <div className="contact-info">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>jortan2002@gmail.com</span>
                    </div>
                </div>
            </Hero>
        </Content>
    );
};

export default ContactPage;
