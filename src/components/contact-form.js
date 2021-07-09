import React from "react";
import "../styles/contact-form.scss";

const ContactForm = () => {
    return (
        <form
            action="https://formspree.io/f/xleankyo"
            method="POST"
            id="contact-form"
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
    );
};

export default ContactForm;
