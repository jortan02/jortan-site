import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactInfo from "../components/contact-info";
import "../styles/contact.scss";

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact" id="contact">
            <Hero>
                <div className="contact-form-container">
                    <h1>Let's get in touch.</h1>
                    <form
                        action="https://formspree.io/f/xleankyo"
                        method="POST"
                    >
                        <label>
                            <div className="input-type">
                                <p>Name</p>
                                <input type="text" name="name" id="name" required />
                            </div>
                        </label>
                        <label>
                            <div className="input-type">
                                <p>Email</p>
                                <input type="email" name="email" id="email" required />
                            </div>
                        </label>
                        <label>
                            <div className="input-type">
                                <p>Subject</p>
                                <input type="text" name="subject" id="subject" required />
                            </div>
                        </label>
                        <label>
                            <div className="input-type">
                                <p>Message</p>
                                <textarea name="message" id="message" rows="6" required />
                            </div>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
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
