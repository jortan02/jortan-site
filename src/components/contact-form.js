import React from "react";
import "../styles/contact-form.scss";

const ContactForm = () => {
    return (
        <form
            action="https://formspree.io/f/xleankyo"
            // action="#"
            method="POST"
        >
            <label>
                <div className="input-type">
                    <p>Name</p>
                </div>
                <input type="text" name="name" id="name" />
            </label>
            <label>
                <div className="input-type">
                    <p>Email</p>
                </div>
                <input type="email" name="email" id="email" />
            </label>
            <label>
                <div className="input-type">
                    <p>Subject</p>
                </div>
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                <div className="input-type">
                  <p>Message</p>
                </div>
                <textarea name="message" id="message" rows="6" />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
