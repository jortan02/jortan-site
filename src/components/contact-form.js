import React from "react";
import ReCAPTCHA  from "react-google-recaptcha";
import "../styles/contact-form.scss";

// require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
// });

const ContactForm = () => {
    const [allowSubmit, setSubmit] = useState(false);

    return (
        <form
            action="?"
            method="POST"
            id="contact-form"
        >
            <label>
                <div className="input-type">
                    <p>Name *</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        aria-required="true"
                    />
                </div>
            </label>
            <label>
                <div className="input-type">
                    <p>Email *</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        aria-required="true"
                    />
                </div>
            </label>
            <label>
                <div className="input-type">
                    <p>Subject *</p>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        aria-required="true"
                    />
                </div>
            </label>
            <label>
                <div className="input-type">
                    <p>Message *</p>
                    <textarea
                        name="message"
                        id="message"
                        rows="6"
                        required
                        aria-required="true"
                    />
                </div>
            </label>
            <ReCAPTCHA
            sitekey= {process.env.RECAPTCHA_CLIENT_KEY}
            onChange={() => setSubmit(true)}
            />,
            <button type="submit" disabled={allowSubmit}>Send</button>
        </form>
    );
};

export default ContactForm;
