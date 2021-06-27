import React from "react";
import "../styles/contact-form.scss";

const ContactForm = () => {
    return (
        <form
            action="https://formspree.io/f/xleankyo"
            method="POST"
        >
            <label>
                <div className="input-type">
                    <p>Name</p>
                </div>
                <input type="text" name="name" id="name" required />
            </label>
            <label>
                <div className="input-type">
                    <p>Email</p>
                </div>
                <input type="email" name="email" id="email" required />
            </label>
            <label>
                <div className="input-type">
                    <p>Subject</p>
                </div>
                <input type="text" name="subject" id="subject" required />
            </label>
            <label>
                <div className="input-type">
                    <p>Message</p>
                </div>
                <textarea name="message" id="message" rows="6" required />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
