import React from "react";
import "../styles/contact-form.scss";

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h1>Let's get in touch.</h1>
            <form action="https://formspree.io/f/xleankyo" method="POST">
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
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                        />
                    </div>
                </label>
                <label>
                    <div className="input-type">
                        <p>Message</p>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            required
                        />
                    </div>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
